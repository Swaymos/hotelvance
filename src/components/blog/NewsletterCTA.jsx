"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email) return;

    try {
      setLoading(true);

      // Replace with your newsletter API
      // await fetch("/api/newsletter", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email }),
      // });

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSuccess(true);
      setEmail("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Mail size={16} />
              Hospitality Technology Newsletter
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Stay Ahead of Hotel Technology Trends
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Get practical insights on hotel Wi-Fi, GPON, IPTV, cybersecurity,
              managed IT, and guest experience delivered straight to your inbox.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Monthly hospitality technology insights",
                "Network optimization best practices",
                "Industry trends & case studies",
                "Exclusive implementation guides",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <CheckCircle2 size={18} className="text-primary" />

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            {success ? (
              <div className="text-center">
                <CheckCircle2 size={60} className="mx-auto text-primary" />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  You're Subscribed!
                </h3>

                <p className="mt-3 text-slate-300">
                  Thank you for joining the Hotevance newsletter. We'll send you
                  expert hospitality technology insights soon.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white">
                  Subscribe Today
                </h3>

                <p className="mt-3 text-slate-400">
                  Join hotel owners, IT managers, and hospitality professionals
                  receiving our latest articles.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>

                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="h-14 w-full rounded-xl border border-white/10 bg-slate-900 px-5 text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      "Subscribing..."
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-5 text-center text-sm text-slate-500">
                  No spam. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
