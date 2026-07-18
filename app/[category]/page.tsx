import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { categories, getCategory } from "@/lib/site";
import { getPostsByCategory } from "@/lib/posts";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <p className="font-mono text-[11px] uppercase tracking-widest text-pine mb-3">Section</p>
      <h1 className="font-display font-black text-4xl text-ink mb-3">{category.name}</h1>
      <p className="font-body text-ink/70 max-w-xl mb-10">{category.description}</p>

      {posts.length === 0 ? (
        <p className="font-body text-ink/60 border border-dashed border-line rounded-sm p-6">
          Nothing published in this section yet. Check back soon, or browse another section
          above.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
