import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How Betterlife discloses affiliate relationships and sponsored content.",
};

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-display font-black text-4xl text-ink mb-8">Affiliate Disclosure</h1>
      <div className="post-body">
        <p>
          Betterlife sometimes includes links to products and services we think are genuinely
          useful, including banking apps, budgeting tools, and investing platforms. Some of
          these are affiliate links, which means we may earn a commission if you sign up or make
          a purchase through them, at no extra cost to you.
        </p>
        <p>
          We only recommend tools we have used ourselves or researched thoroughly, and our
          opinions are our own. An affiliate relationship never changes what we say about a
          product, and it does not guarantee a positive review.
        </p>
        <p>
          Any post that contains affiliate links carries a short disclosure note at the bottom
          of the article. If you have questions about a specific recommendation, reach out
          through our contact page.
        </p>
      </div>
    </div>
  );
}
