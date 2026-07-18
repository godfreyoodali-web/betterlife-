import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Betterlife exists: a personal finance blog for people who want a real plan instead of a vague hope.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-widest text-pine mb-3">About</p>
      <h1 className="font-display font-black text-4xl text-ink mb-8">
        Why Betterlife exists
      </h1>

      <div className="post-body">
        <p>
          Most money advice comes from two places. Either someone who has never been broke
          explaining what broke people should do, or someone selling a dream with no numbers
          behind it. Betterlife started because both of those got old fast.
        </p>
        <p>
          We write about budgeting, investing, debt payoff, and side income the way we would
          explain it to a friend at the kitchen table. That means real numbers instead of vague
          ranges, and it means naming the effort or the risk instead of skipping straight to the
          highlight reel.
        </p>
        <p>
          Nothing here is a promise. Building wealth is slower and messier than most content
          admits, and starting later than you wanted to does not mean you missed the window. It
          means you start today with a plan that fits where you actually are, not where a
          spreadsheet says you should have been five years ago.
        </p>
        <h2>What you will find here</h2>
        <p>
          Practical guides on budgeting and saving, investing basics for people starting from
          zero, debt payoff strategy that accounts for both the math and the psychology, honest
          writing about money mindset, and side income ideas with real timelines attached. Free
          printable trackers show up throughout, because a plan you do not track is just a
          feeling.
        </p>
        <h2>How we make money</h2>
        <p>
          Betterlife earns through display ads and select affiliate partnerships with financial
          tools we actually use or have genuinely reviewed. Every affiliate relationship is
          disclosed. You can read the full breakdown on the disclosure page.
        </p>
      </div>
    </div>
  );
}
