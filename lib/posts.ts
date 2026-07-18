import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  publishDate: string;
  updatedDate?: string;
  featuredImage: string;
  featuredImageAlt: string;
  keyTakeaways?: string[];
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
};

function readSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPosts(): Post[] {
  const slugs = readSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug)).filter(Boolean) as Post[];
  return posts.sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    metaDescription: data.metaDescription,
    category: data.category,
    publishDate: data.publishDate,
    updatedDate: data.updatedDate,
    featuredImage: data.featuredImage ?? "/images/posts/placeholder.svg",
    featuredImageAlt: data.featuredImageAlt ?? data.title,
    keyTakeaways: data.keyTakeaways ?? [],
    readingTime: readingTime(content).text,
    content,
  };
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return getAllPosts().filter((p) => p.category === categorySlug);
}

export function getRelatedPosts(current: Post, limit = 3): Post[] {
  return getAllPosts()
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, limit);
}
