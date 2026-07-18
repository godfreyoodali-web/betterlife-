import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Betterlife uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-display font-black text-4xl text-ink mb-8">Cookie Policy</h1>
      <div className="post-body">
        <p>
          Last updated: replace this line with your actual publish date before launch.
        </p>
        <h2>What cookies are</h2>
        <p>
          Cookies are small text files stored on your device that help websites remember
          information about your visit.
        </p>
        <h2>How we use cookies</h2>
        <p>
          We use cookies for essential site functionality, for analytics that help us
          understand how the site is used, and, once display advertising is active, to support
          ad delivery and measurement.
        </p>
        <h2>Managing cookies</h2>
        <p>
          Most browsers let you block or delete cookies through their settings. Blocking
          cookies may affect how parts of this site function.
        </p>
      </div>
    </div>
  );
}
