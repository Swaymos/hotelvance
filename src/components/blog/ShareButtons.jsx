"use client";

import { useEffect, useState } from "react";
import { Share2, Link2, Check, Linkedin, Facebook } from "lucide-react";

export default function ShareButtons({ title, url, description = "" }) {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  /*
   * navigator is only checked after hydration.
   * This prevents server/client HTML mismatches.
   */
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setCanNativeShare(typeof navigator.share === "function");
    }
  }, []);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  }

  async function nativeShare() {
    if (!navigator.share) return;

    try {
      await navigator.share({
        title,
        text: description,
        url,
      });
    } catch (error) {
      // User cancelled sharing.
    }
  }

  const socials = [
    {
      name: "X",
      icon: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-100px] top-[-120px] -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-0 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
              <Share2 className="h-5 w-5 text-primary" />
            </div>

            <h3 className="text-lg font-semibold text-white">
              Share this article
            </h3>
          </div>

          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Found this article helpful? Share it with your colleagues.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-3">
          {/* Native Share */}
          {canNativeShare && (
            <button
              type="button"
              onClick={nativeShare}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
            >
              <Share2 size={18} className="text-primary" />
              Share
            </button>
          )}

          {/* Socials */}
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${social.name}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
              >
                {social.icon === "X" ? (
                  <span className="flex h-[18px] w-[18px] items-center justify-center text-sm font-bold text-primary">
                    𝕏
                  </span>
                ) : (
                  <Icon size={18} className="text-primary" />
                )}

                {social.name}
              </a>
            );
          })}

          {/* Copy Link */}
          <button
            type="button"
            onClick={copyLink}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-slate-950 transition-all duration-300 hover:brightness-110"
          >
            {copied ? (
              <>
                <Check size={18} />
                Copied
              </>
            ) : (
              <>
                <Link2 size={18} />
                Copy Link
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
