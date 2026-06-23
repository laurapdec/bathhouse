import type { Event } from "@/lib/eventbrite";

export default function ClassCard({ entry }: { entry: Event }) {
  const dateObj = new Date(entry.date + "T00:00:00");
  const weekday = dateObj.toLocaleDateString("en-US", { weekday: "short" });
  const month = dateObj.toLocaleDateString("en-US", { month: "short" });
  const day = dateObj.getDate();

  return (
    <article className="bg-surface rounded-2xl p-6 flex gap-5 border border-sand hover:border-terracotta/40 hover:shadow-sm transition-all duration-200 group">
      {/* Date block */}
      <div className="flex-shrink-0 flex flex-col items-center justify-start pt-0.5 w-12">
        <span className="text-xs font-medium uppercase tracking-widest text-ink-light">
          {weekday}
        </span>
        <span className="font-serif text-3xl font-bold text-terracotta leading-none mt-0.5">
          {day}
        </span>
        <span className="text-xs font-medium text-ink-light mt-0.5">
          {month}
        </span>
      </div>

      {/* Divider */}
      <div className="w-px bg-sand self-stretch" />

      {/* Details */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-terracotta transition-colors leading-tight">
          {entry.name}
        </h3>
        {entry.teacher && (
          <p className="text-sm text-ink-mid">
            with <span className="font-medium text-ink">{entry.teacher}</span>
          </p>
        )}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
          <span className="text-xs text-ink-light flex items-center gap-1">
            <ClockIcon />
            {entry.time}
          </span>
          <span className="text-xs text-ink-light flex items-center gap-1">
            <PinIcon />
            {entry.location}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-3">
          <span className="inline-block text-xs font-medium bg-sand text-ink-mid px-2.5 py-0.5 rounded-full">
            {entry.level}
          </span>
          {entry.url && (
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-terracotta hover:text-terracotta-dark transition-colors"
            >
              Register →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
