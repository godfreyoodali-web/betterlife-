import Link from "next/link";
import { categories, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="bg-paper border-b border-line">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="group inline-flex items-baseline gap-2">
            <span className="font-display text-2xl font-900 font-black tracking-tight text-ink">
              Betterlife
            </span>
            <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.15em] text-pine">
              money, kept honest
            </span>
          </Link>
          <Link
            href="/#newsletter"
            className="hidden sm:inline-flex items-center rounded-sm bg-ink px-4 py-2 font-mono text-xs uppercase tracking-wider text-paperlight hover:bg-pinedark transition-colors"
          >
            Get the newsletter
          </Link>
        </div>

        <nav
          aria-label="Categories"
          className="flex flex-wrap gap-x-1 gap-y-0 -mb-px overflow-x-auto"
        >
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="whitespace-nowrap border border-b-0 border-line bg-paperlight px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider text-ink/70 hover:text-pine hover:bg-white transition-colors rounded-t-sm"
            >
              {c.shortName}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
