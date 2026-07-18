# Betterlife

A personal finance and wealth-building blog. Next.js (App Router) + TypeScript + Tailwind CSS, content in MDX, deployed on Vercel.

## Stack

- **Framework:** Next.js 14 (App Router), React, TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX files in `content/posts`, parsed with `gray-matter` and rendered with `next-mdx-remote`
- **Newsletter:** stub API route at `app/api/subscribe`, ready to wire up to MailerLite
- **SEO:** static generation for every post/category, auto-generated `sitemap.xml` and `robots.txt`, Open Graph + Twitter meta tags, JSON-LD `BlogPosting` structured data per post

## Getting started locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To test a production build locally:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  page.tsx                    Home page
  [category]/page.tsx         Category listing page (budgeting-saving, investing-basics, etc.)
  [category]/[slug]/page.tsx  Single post page
  about/, contact/, shop/, privacy-policy/, cookie-policy/, disclosure/
  api/subscribe/route.ts      Newsletter signup endpoint
  sitemap.ts, robots.ts       Auto-generated from lib/site.ts and content/posts
  globals.css                 Fonts, tokens, and post typography
components/                   Header, Footer, PostCard, NewsletterForm, KeyTakeaways, AuthorBio, DisclosureNote
content/posts/                One .mdx file per blog post
lib/
  site.ts                     Site name, categories, and their descriptions
  posts.ts                    Reads and parses content/posts at build time
public/images/                Featured images (SVG placeholders included, swap for real photography/graphics)
```

## Adding a new blog post

1. Create a new `.mdx` file in `content/posts/`. The filename becomes the URL slug, so `how-to-start-a-side-hustle.mdx` becomes `/side-income/how-to-start-a-side-hustle`.
2. Add frontmatter at the top of the file:

   ```md
   ---
   title: "Your Post Title"
   metaDescription: "17 to 20 words, includes your focus keyword, reads like a real sentence."
   category: "budgeting-saving"   # must match a slug in lib/site.ts
   publishDate: "2026-07-01"
   updatedDate: "2026-08-01"       # optional
   featuredImage: "/images/posts/your-image.svg"
   featuredImageAlt: "Description of the image for accessibility and SEO"
   keyTakeaways:
     - "First takeaway"
     - "Second takeaway"
   ---
   ```

3. Write the body in Markdown/MDX below the frontmatter (`##` and `###` headings, lists, blockquotes, etc.). Raw JSX/HTML is also supported inside the body if you need a custom callout.
4. Drop a featured image into `public/images/posts/` (1200×675 recommended, WebP or SVG).
5. Commit and push. The post appears automatically on the home page, its category page, and in the sitemap. No other code changes are needed.

To add or rename a **category**, edit the `categories` array in `lib/site.ts`. Category pages, navigation, and the footer all pull from that single list.

## Connecting the newsletter (MailerLite)

The signup form already posts to `app/api/subscribe`. To go live:

1. Create a MailerLite account and an API key (or swap the provider logic in `app/api/subscribe/route.ts` for ConvertKit).
2. In Vercel, go to Project Settings → Environment Variables and add:
   - `MAILERLITE_API_KEY`
   - `MAILERLITE_GROUP_ID` (optional, if you want subscribers added to a specific group)
3. Redeploy. Until these are set, submissions are logged to the server console so you can still test the flow end to end.

## Deploying

1. Push this repository to GitHub.
2. In Vercel, click **New Project**, import the repository, and accept the default Next.js build settings (`npm run build`, output directory auto-detected).
3. Add the environment variables above if you're connecting the newsletter provider.
4. Deploy. Every push to `main` redeploys automatically.
5. Once you have a custom domain, update `site.url` in `lib/site.ts` to match, since it feeds the sitemap, canonical URLs, and Open Graph tags.

## Before you consider this launch-ready

- Swap the SVG placeholders in `public/images/posts/` for real featured images (WebP recommended for performance).
- Replace the `hello@betterlife.example` address in `app/contact/page.tsx`.
- Fill in real "last updated" dates on the Privacy Policy, Cookie Policy, and Disclosure pages, and have them reviewed since this is financial ("YMYL") content.
- Connect Vercel Analytics and Google Search Console (both are mentioned in the project brief but require accounts, so they aren't wired up in code).
- Build out the free PDF download referenced in the newsletter form and the printables post, and host it somewhere the signup flow can link to or email automatically.
- Consider adding Pagefind (or a similar static search tool) once you have enough posts that on-site search is worth it.
