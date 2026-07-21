import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: ["/images/og-default.svg"],
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
     <head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3985719102877512" crossorigin="anonymous"></script>
        </head>
        <body className="font-body bg-paper text-ink antialiased"><Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
