import Link from "next/link";
import PostCard from "@/components/PostCard";
import NewsletterForm from "@/components/NewsletterForm";
import { getAllPosts } from "@/lib/posts";
import { categories } from "@/lib/site";

export default function HomePage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="border-b border-line bg-ledger-lines">
        <div className="mx-auto max-w-5xl px-5 pt-16 pb-14 sm:pt-24 sm:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-pine mb-5">
            Vol. 01 — Money, kept honest
          </p>
          <h1 className="font-display font-black text-ink text-[2.4rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] max-w-3xl">
            You did not start too late. You just never got a real plan.
          </h1>
          <p className="mt-6 font-body text-lg text-ink/75 max-w-xl leading-relaxed">
            Betterlife is where budgeting, investing, debt payoff, and side income get talked
            about the way a friend who actually figured it out would talk about them. Real
            numbers. Real tradeoffs. No lectures.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.slice(0, 4).map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="font-mono text-xs uppercase tracking-wider border border-ink/20 rounded-sm px-3.5 py-2 hover:border-pine hover:text-pine transition-colors"
              >
                {c.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {featured && (
        <section className="mx-auto max-w-5xl px-5 pt-14">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40 mb-4">
            Latest entry
          </p>
          <PostCard post={featured} featured />
        </section>
      )}

      {rest.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 pt-14">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="font-display text-xl font-bold text-ink">More from the ledger</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="font-display text-xl font-bold text-ink mb-5">Browse by section</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group flex items-start justify-between gap-4 border border-line bg-paperlight rounded-sm p-5 hover:border-pine/50 transition-colors"
            >
              <div>
                <h3 className="font-display font-semibold text-ink group-hover:text-pine transition-colors">
                  {c.name}
                </h3>
                <p className="mt-1 font-body text-sm text-ink/65">{c.description}</p>
              </div>
              <span className="font-mono text-pine shrink-0">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20">
        <NewsletterForm />
      </section>
    </>
  );
}
