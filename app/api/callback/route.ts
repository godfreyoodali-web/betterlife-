import { NextRequest, NextResponse } from "next/server";

// Step 2 of the Decap CMS <-> GitHub OAuth handshake.
// GitHub redirects back here with a ?code=. Exchange it for an access
// token, then hand that token to the admin UI via postMessage, following
// the protocol Decap CMS's GitHub backend expects.

export async function GET(req: NextRequest) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
  const code = req.nextUrl.searchParams.get("code");

  if (!clientId || !clientSecret) {
    return new NextResponse(
      "Missing GITHUB_OAUTH_CLIENT_ID or GITHUB_OAUTH_CLIENT_SECRET environment variable. See README.md for setup.",
      { status: 500 }
    );
  }

  if (!code) {
    return new NextResponse("Missing OAuth code from GitHub.", { status: 400 });
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const tokenData = await tokenRes.json();

  if (!tokenData.access_token) {
    return new NextResponse(
      `GitHub did not return an access token: ${JSON.stringify(tokenData)}`,
      { status: 400 }
    );
  }

  const token = tokenData.access_token;
  const payload = JSON.stringify({ token, provider: "github" });

  const html = `<!doctype html>
<html>
  <body>
    <script>
      (function() {
        function receiveMessage(e) {
          window.opener.postMessage(
            'authorization:github:success:${payload.replace(/'/g, "\\'")}',
            e.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  </body>
</html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}
