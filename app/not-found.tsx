import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <p className="font-mono text-[11px] uppercase tracking-widest text-pine mb-3">
        Page not found
      </p>
      <h1 className="font-display font-black text-4xl text-ink mb-4">
        This page never made it into the ledger.
      </h1>
      <p className="font-body text-ink/70 mb-8">
        The page you are looking for does not exist, or it moved. Try heading back home.
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-sm bg-ink px-5 py-3 font-mono text-xs uppercase tracking-wider text-paperlight hover:bg-pinedark transition-colors"
      >
        Back to Betterlife
      </Link>
    </div>
  );
}
