import Link from "next/link";

export default function DisclosureNote() {
  return (
    <p className="font-body text-xs text-ink/50 border-t border-line pt-4 mt-10">
      Some links in this post may be affiliate links. If you use them, Betterlife may earn a
      small commission at no extra cost to you. Read the full{" "}
      <Link href="/disclosure" className="underline text-pine">
        disclosure
      </Link>
      .
    </p>
  );
}
