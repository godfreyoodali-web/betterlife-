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
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3985719102877512" crossOrigin="anonymous"></script> 
      <script
  id="popads-adcode"
  dangerouslySetInnerHTML={{
    __html: `
/*<![CDATA[/* */
(function(){var f=window,v="f64b59f56b6ff68cc019c023a83a8547",n=[["siteId",438-847*98-953*391+5770573],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],i=["d3d3LmJldHRlcmFkc3lzdGVtLmNvbS9mZXZlLm1pbi5jc3M=","ZDJrazBvM2ZyN2VkMDEuY2xvdWRmcm9udC5uZXQvZ1VxQ24vaWpzdmlld3MubWluLmpz"],j=-1,w,y,c=function(){clearTimeout(y);j++;if(i[j]&&!(1811607752000<(new Date).getTime()&&1<j)){w=f.document.createElement("script");w.type="text/javascript";w.async=!0;var s=f.document.getElementsByTagName("script")[0];w.src="https://"+atob(i[j]);w.crossOrigin="anonymous";w.onerror=c;w.onload=function(){clearTimeout(y);f[v.slice(0,16)+v.slice(0,16)]||c()};y=setTimeout(c,5E3);s.parentNode.insertBefore(w,s)}};if(!f[v]){try{Object.freeze(f[v]=n)}catch(e){}c()}})();
/*]]>/* */
`
  }}
/>
        </head>
        <body className="font-body bg-paper text-ink antialiased"><Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
