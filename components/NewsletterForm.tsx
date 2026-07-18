"use client";

import { useState } from "react";

export default function NewsletterForm({
  variant = "default",
}: {
  variant?: "default" | "inline" | "endpost";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const isEndPost = variant === "endpost";

  return (
    <div
      id="newsletter"
      className={
        isEndPost
          ? "rounded-sm border border-line bg-paperlight p-6 sm:p-8"
          : "rounded-sm border border-white/15 bg-pinedark p-6 sm:p-8 text-paperlight"
      }
    >
      <p
        className={
          "font-mono text-[11px] uppercase tracking-widest mb-2 " +
          (isEndPost ? "text-pine" : "text-gold")
        }
      >
        Free download
      </p>
      <h3
        className={
          "font-display text-xl sm:text-2xl font-bold mb-2 " +
          (isEndPost ? "text-ink" : "text-white")
        }
      >
        Get the Money Habits Checklist
      </h3>
      <p
        className={
          "font-body text-sm mb-4 max-w-md " +
          (isEndPost ? "text-ink/70" : "text-paperlight/80")
        }
      >
        One page. Five habits. Sent straight to your inbox along with a weekly note on what
        actually moved the needle for readers this week.
      </p>

      {status === "success" ? (
        <p className="font-body text-sm font-medium text-gold">
          Check your inbox. Your checklist is on the way.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
          <label htmlFor={`email-${variant}`} className="sr-only">
            Email address
          </label>
          <input
            id={`email-${variant}`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 rounded-sm border border-line bg-white px-3 py-2.5 font-body text-sm text-ink placeholder:text-ink/40"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-sm bg-gold px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-ink font-semibold hover:brightness-95 disabled:opacity-60 transition"
          >
            {status === "loading" ? "Sending…" : "Send it to me"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="font-body text-xs text-rust mt-2">
          Something went wrong. Try again in a moment.
        </p>
      )}
    </div>
  );
}
