export function SiteHeader() {
  return (
    <header className="relative z-20 flex w-full items-start justify-between px-5 pt-6 sm:px-8 sm:pt-8 lg:px-12">
      <a
        href="/"
        className="font-display text-sm font-medium tracking-[0.2em] text-paper sm:text-base"
      >
        Studio 53
      </a>
      <div
        className="flex items-center gap-2 border border-paper/10 px-3 py-1.5 glass-panel"
        role="status"
        aria-live="polite"
      >
        <span
          className="live-pulse-dot size-2 shrink-0 rounded-full bg-acid"
          aria-hidden
        />
        <span className="text-[10px] font-medium tracking-[0.25em] text-paper/90 sm:text-[11px]">
          LIVE PULSE
        </span>
      </div>
    </header>
  );
}
