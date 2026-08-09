"use client";

import { useEffect, useState } from "react";
import { Share2, Link2, Check, Linkedin, Facebook } from "lucide-react";

export default function ShareButtons({
  title = "",
  url = "",
  description = "",
}) {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  /*
   * Get the actual browser URL after hydration.
   *
   * This also handles cases where the parent passes:
   * /blog/gpon-fiber-hotels
   *
   * instead of:
   * https://hotevance.com/blog/gpon-fiber-hotels
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const absoluteUrl = url
      ? new URL(url, window.location.origin).href
      : window.location.href;

    setShareUrl(absoluteUrl);

    setCanNativeShare(
      typeof navigator !== "undefined" && typeof navigator.share === "function"
    );
  }, [url]);

  /*
   * Copy link
   */
  async function copyLink() {
    if (!shareUrl) return;

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        // Fallback for browsers where Clipboard API is unavailable
        const textarea = document.createElement("textarea");

        textarea.value = shareUrl;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand("copy");

        document.body.removeChild(textarea);
      }

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  }

  /*
   * Native device sharing
   */
  async function nativeShare() {
    if (!shareUrl || !navigator.share) return;

    try {
      await navigator.share({
        title,
        text: description,
        url: shareUrl,
      });
    } catch (error) {
      // User cancelled the share dialog.
      if (error?.name !== "AbortError") {
        console.error("Native sharing failed:", error);
      }
    }
  }

  /*
   * Social sharing URLs
   */
  const socials = [
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(title)}`,
      icon: "X",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      icon: Linkedin,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      icon: Facebook,
    },
  ];

  return (
    <section className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-6 md:p-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
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

          {/* Social buttons */}
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={shareUrl ? social.href : "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${social.name}`}
                onClick={(event) => {
                  if (!shareUrl) {
                    event.preventDefault();
                  }
                }}
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
            disabled={!shareUrl}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
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
