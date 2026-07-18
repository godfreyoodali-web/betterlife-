export default function AuthorBio() {
  return (
    <div className="flex items-start gap-4 border-t border-line pt-8 mt-10">
      <div className="h-12 w-12 shrink-0 rounded-full bg-pine/15 border border-pine/30" />
      <div>
        <p className="font-display font-semibold text-ink">Written by the Betterlife team</p>
        <p className="font-body text-sm text-ink/65 mt-1 max-w-md">
          We write from experience, not theory: budgets we have actually run, debts we have
          actually paid off, and trades we have actually made, wins and mistakes included.
        </p>
      </div>
    </div>
  );
}
