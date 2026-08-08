export default function Loading() {
  return (
    <main className="animate-pulse">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-20">
          {/* Category */}
          <div className="mb-6 h-8 w-36 rounded-full bg-slate-200 dark:bg-slate-800" />

          {/* Title */}
          <div className="space-y-4">
            <div className="h-12 w-full rounded-lg bg-slate-200 dark:bg-slate-800" />
            <div className="h-12 w-4/5 rounded-lg bg-slate-200 dark:bg-slate-800" />
          </div>

          {/* Description */}
          <div className="mt-8 space-y-3">
            <div className="h-5 w-full rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-5 w-11/12 rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-5 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
          </div>

          {/* Author */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-slate-200 dark:bg-slate-800" />

            <div className="space-y-2">
              <div className="h-4 w-40 rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_300px]">
        {/* Article */}
        <article className="space-y-8">
          {/* Featured Image */}
          <div className="aspect-[16/9] w-full rounded-3xl bg-slate-200 dark:bg-slate-800" />

          {/* Paragraphs */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <div className="h-5 w-full rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-5 w-full rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-5 w-5/6 rounded bg-slate-200 dark:bg-slate-800" />
            </div>
          ))}

          {/* Code Block */}
          <div className="h-72 rounded-2xl bg-slate-200 dark:bg-slate-800" />

          {/* More Content */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={`bottom-${index}`} className="space-y-3">
              <div className="h-5 w-full rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-5 w-10/12 rounded bg-slate-200 dark:bg-slate-800" />
            </div>
          ))}
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-8">
            {/* TOC */}
            <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <div className="mb-6 h-6 w-44 rounded bg-slate-200 dark:bg-slate-800" />

              <div className="space-y-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-4 rounded bg-slate-200 dark:bg-slate-800"
                    style={{
                      width: `${90 - index * 8}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Author Card */}
            <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <div className="mx-auto h-20 w-20 rounded-full bg-slate-200 dark:bg-slate-800" />

              <div className="mt-5 h-5 w-40 rounded bg-slate-200 dark:bg-slate-800" />

              <div className="mt-4 space-y-2">
                <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Related Posts */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 h-10 w-72 rounded bg-slate-200 dark:bg-slate-800" />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"
            >
              <div className="aspect-[16/10] bg-slate-200 dark:bg-slate-800" />

              <div className="space-y-4 p-6">
                <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-800" />

                <div className="h-7 rounded bg-slate-200 dark:bg-slate-800" />

                <div className="space-y-2">
                  <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-800" />
                </div>

                <div className="flex justify-between pt-3">
                  <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-800" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
