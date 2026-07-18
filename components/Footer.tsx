import Link from "next/link";
import { categories, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-ink text-paperlight">
      <div className="mx-auto max-w-5xl px-5 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <span className="font-display text-xl font-black">Betterlife</span>
          <p className="mt-3 font-body text-sm text-paperlight/70 leading-relaxed max-w-xs">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-gold mb-3">
            Sections
          </p>
          <ul className="space-y-2 font-body text-sm text-paperlight/80">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-gold mb-3">
            Site
          </p>
          <ul className="space-y-2 font-body text-sm text-paperlight/80">
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
            <li>
              <Link href="/disclosure" className="hover:text-white">Affiliate Disclosure</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-5xl px-5 py-5 font-mono text-[11px] text-paperlight/50">
          © {new Date().getFullYear()} Betterlife. Not financial advice. Just what actually worked.
        </p>
      </div>
    </footer>
  );
}
