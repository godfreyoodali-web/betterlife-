import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/posts";
import { getCategory } from "@/lib/site";

export default function PostCard({ post, featured = false }: { post: PostMeta; featured?: boolean }) {
  const category = getCategory(post.category);

  return (
    <Link
      href={`/${post.category}/${post.slug}`}
      className="group block bg-paperlight border border-line rounded-sm overflow-hidden hover:border-pine/50 transition-colors"
    >
      <div className={`relative w-full ${featured ? "aspect-[16/9]" : "aspect-[4/3]"} bg-ink/5 border-b-4 border-pine`}>
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          className="object-cover"
          sizes={featured ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-pine">
            {category?.shortName ?? post.category}
          </span>
          <span className="text-line">·</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
            {post.readingTime}
          </span>
        </div>
        <h3
          className={`font-display font-bold text-ink group-hover:text-pine transition-colors ${
            featured ? "text-2xl sm:text-3xl leading-tight" : "text-lg leading-snug"
          }`}
        >
          {post.title}
        </h3>
        <p className="mt-2 font-body text-sm text-ink/70 line-clamp-2">{post.metaDescription}</p>
      </div>
    </Link>
  );
}
