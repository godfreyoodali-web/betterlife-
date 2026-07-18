import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Betterlife team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-widest text-pine mb-3">Contact</p>
      <h1 className="font-display font-black text-4xl text-ink mb-6">Say hello</h1>
      <p className="font-body text-ink/75 leading-relaxed mb-8 max-w-lg">
        Story idea, partnership question, or you just want to tell us a budgeting method
        actually worked for you. Reach out directly and we will get back to you within a few
        days.
      </p>
      <a
        href="mailto:hello@betterlife.example"
        className="inline-flex items-center rounded-sm bg-ink px-5 py-3 font-mono text-xs uppercase tracking-wider text-paperlight hover:bg-pinedark transition-colors"
      >
        hello@betterlife.example
      </a>
    </div>
  );
}
