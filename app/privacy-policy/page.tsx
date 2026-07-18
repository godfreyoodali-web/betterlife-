import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Betterlife collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-display font-black text-4xl text-ink mb-8">Privacy Policy</h1>
      <div className="post-body">
        <p>
          Last updated: replace this line with your actual publish date before launch.
        </p>
        <h2>Information we collect</h2>
        <p>
          When you subscribe to our newsletter, we collect your email address through our email
          service provider. When you contact us, we collect whatever information you choose to
          share in that message. We also use analytics tools that collect anonymized usage data,
          such as pages visited and general location at the country or city level.
        </p>
        <h2>How we use your information</h2>
        <p>
          We use your email address to send the content you signed up for, including free
          downloads and periodic newsletters. We use analytics data to understand which content
          is useful and to improve the site. We do not sell your personal information.
        </p>
        <h2>Third-party services</h2>
        <p>
          This site uses third-party tools for email delivery, hosting, and analytics. Each of
          these providers has its own privacy policy governing how they handle data on our
          behalf.
        </p>
        <h2>Your choices</h2>
        <p>
          You can unsubscribe from our newsletter at any time using the link in any email we
          send. You can also contact us directly to request that we delete your information.
        </p>
        <h2>Contact</h2>
        <p>Questions about this policy can be sent to the address on our contact page.</p>
      </div>
    </div>
  );
}
