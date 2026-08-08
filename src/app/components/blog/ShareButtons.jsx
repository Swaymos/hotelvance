"use client";

import { useState } from "react";
import {
  Share2,
  Link2,
  Check,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function ShareButtons({ title, url, description = "" }) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
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
    } catch (err) {
      // User cancelled sharing
    }
  }

  const socials = [
    {
      name: "X",
      icon: Twitter,
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
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <Share2 size={20} className="text-primary" />

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Share this article
            </h3>
          </div>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Found this article helpful? Share it with your colleagues.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-3">
          {/* Native Share */}
          {typeof navigator !== "undefined" && navigator.share && (
            <button
              onClick={nativeShare}
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium transition hover:border-primary hover:text-primary dark:border-slate-700"
            >
              <Share2 size={18} />
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
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium transition hover:border-primary hover:text-primary dark:border-slate-700"
              >
                <Icon size={18} />
                {social.name}
              </a>
            );
          })}

          {/* Copy Link */}
          <button
            onClick={copyLink}
            className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-slate-950 transition hover:brightness-110"
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
