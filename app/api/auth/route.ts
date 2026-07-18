import { NextRequest, NextResponse } from "next/server";

// Step 1 of the Decap CMS <-> GitHub OAuth handshake.
// The CMS admin UI opens this route in a popup; it redirects to GitHub's
// authorize screen. Requires GITHUB_OAUTH_CLIENT_ID to be set in your
// environment variables (see README for setup).

export async function GET(req: NextRequest) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;

  if (!clientId) {
    return new NextResponse(
      "Missing GITHUB_OAUTH_CLIENT_ID environment variable. See README.md for setup.",
      { status: 500 }
    );
  }

  const redirectUri = new URL("/api/callback", req.url).toString();

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo,user");

  return NextResponse.redirect(authorizeUrl.toString());
}
