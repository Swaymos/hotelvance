"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        documentHeight > 0
          ? Math.min((scrollTop / documentHeight) * 100, 100)
          : 0;

      setProgress(percentage);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed left-0 top-0 z-[9999] h-1 w-full bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{
            width: `${progress}%`,
            opacity: progress > 0 ? 1 : 0,
          }}
        />
      </div>

      {/* Optional Progress Indicator */}
      <div className="fixed bottom-6 right-6 z-50 hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg lg:flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
        {Math.round(progress)}%
      </div>
    </>
  );
}
