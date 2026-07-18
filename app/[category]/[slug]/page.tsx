import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { getCategory } from "@/lib/site";
import { site } from "@/lib/site";
import KeyTakeaways from "@/components/KeyTakeaways";
import DisclosureNote from "@/components/DisclosureNote";
import AuthorBio from "@/components/AuthorBio";
import NewsletterForm from "@/components/NewsletterForm";
import PostCard from "@/components/PostCard";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ category: p.category, slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/${post.category}/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate ?? post.publishDate,
      url: `${site.url}/${post.category}/${post.slug}`,
      images: [post.featuredImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.featuredImage],
    },
  };
}

export default function PostPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post || post.category !== params.category) notFound();

  const category = getCategory(post.category);
  const related = getRelatedPosts(post);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.updatedDate ?? post.publishDate,
    image: `${site.url}${post.featuredImage}`,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/${post.category}/${post.slug}`,
  };

  return (
    <article className="mx-auto max-w-2xl px-5 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-6">
        <Link
          href={`/${post.category}`}
          className="font-mono text-[11px] uppercase tracking-widest text-pine hover:underline"
        >
          {category?.name ?? post.category}
        </Link>
      </div>

      <h1 className="font-display font-black text-3xl sm:text-4xl leading-tight text-ink mb-4">
        {post.title}
      </h1>

      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-ink/45 mb-8">
        <time dateTime={post.publishDate}>
          {new Date(post.publishDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>

      <div className="relative w-full aspect-[16/9] mb-10 border-b-4 border-pine bg-ink/5">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 768px) 42rem, 100vw"
        />
      </div>

      {post.keyTakeaways && post.keyTakeaways.length > 0 && (
        <KeyTakeaways items={post.keyTakeaways} />
      )}

      <div className="post-body">
        <MDXRemote source={post.content} />
      </div>

      <DisclosureNote />
      <AuthorBio />

      <div className="mt-12">
        <NewsletterForm variant="endpost" />
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-xl font-bold text-ink mb-5">
            More on {category?.shortName?.toLowerCase() ?? "this topic"}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
