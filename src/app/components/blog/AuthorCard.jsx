import Image from "next/image";
import Link from "next/link";
import { Linkedin, Globe, Mail, ArrowRight } from "lucide-react";

export default function AuthorCard({ author }) {
  if (!author) return null;

  const initials = author.name
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2);

  return (
    <aside className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="h-2 bg-primary" />

      <div className="p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          {/* Avatar */}
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-slate-100 bg-slate-200 dark:border-slate-800">
            {author.image ? (
              <Image
                src={author.image}
                alt={author.name}
                fill
                sizes="112px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-slate-600">
                {initials}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              About the Author
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
              {author.name}
            </h3>

            {author.role && (
              <p className="mt-2 font-medium text-slate-600 dark:text-slate-300">
                {author.role}
              </p>
            )}

            {author.bio && (
              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                {author.bio}
              </p>
            )}

            {/* Expertise */}
            {author.expertise?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {author.expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {author.website && (
                <Link
                  href={author.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary dark:border-slate-700"
                >
                  <Globe size={16} />
                  Website
                </Link>
              )}

              {author.linkedin && (
                <Link
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary dark:border-slate-700"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </Link>
              )}

              {author.email && (
                <Link
                  href={`mailto:${author.email}`}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary dark:border-slate-700"
                >
                  <Mail size={16} />
                  Contact
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/50">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                Need help with your hotel's technology?
              </h4>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Speak with the Hotevance team about Wi-Fi, GPON, IPTV, managed
                IT, and hospitality technology solutions.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-slate-950 transition hover:brightness-110"
            >
              Talk to an Expert
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
