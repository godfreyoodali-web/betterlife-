export default function KeyTakeaways({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="relative my-8 -rotate-[0.4deg] border border-dashed border-gold/60 bg-white/70 px-6 py-5 shadow-sm">
      <p className="font-mono text-[11px] uppercase tracking-widest text-rust mb-3">
        Key takeaways
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="font-body text-[0.95rem] text-ink/85 leading-snug flex gap-2">
            <span className="font-mono text-pine">{String(i + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
