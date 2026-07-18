import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "Budget templates, trackers, and courses from Betterlife. Coming soon.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <p className="font-mono text-[11px] uppercase tracking-widest text-pine mb-3">Shop</p>
      <h1 className="font-display font-black text-4xl text-ink mb-4">
        Templates and trackers are on the way.
      </h1>
      <p className="font-body text-ink/70 max-w-md mx-auto">
        We are building out digital budget templates, trackers, and a short course. Join the
        newsletter on the homepage and you will be the first to hear when they launch.
      </p>
    </div>
  );
}
