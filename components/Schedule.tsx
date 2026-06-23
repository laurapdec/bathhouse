import Link from "next/link";
import { getEvents } from "@/lib/eventbrite";
import type { Event } from "@/lib/eventbrite";
import ClassCard from "./ClassCard";
import CountUp from "./CountUp";

// Swap these for live Eventbrite totals once available
const TOTAL_EVENTS = 54;
const TOTAL_ATTENDEES = 458;

type Props = {
  limit?: number;
  totalEvents?: number;
  totalAttendees?: number;
};

export default async function Schedule({ limit, totalEvents = TOTAL_EVENTS, totalAttendees = TOTAL_ATTENDEES }: Props) {
  const events: Event[] = await getEvents();
  const displayed = limit ? events.slice(0, limit) : events;
  const isPreview = !!limit && events.length > limit;

  return (
    <section id="schedule" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Stats sentence */}
        <p className="text-center text-ink-mid text-2xl md:text-3xl leading-relaxed mb-14 pb-14 border-b border-sand">
          Come join our{" "}
          <span className="font-serif font-bold text-terracotta tabular-nums">
            <CountUp target={totalAttendees} duration={2000} />
          </span>{" "}
          attendees in one of our{" "}
          <span className="font-serif font-bold text-terracotta tabular-nums">
            <CountUp target={totalEvents} />
          </span>{" "}
          events.
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-ink mb-3">
              What&rsquo;s on
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
              Upcoming Classes
            </h2>
          </div>
          <p className="text-ink-mid max-w-xs leading-relaxed text-sm">
            All classes are pay-what-you-can. No gatekeeping.
          </p>
        </div>

        {displayed.length === 0 ? (
          <div className="text-center py-20 border border-sand rounded-2xl">
            <p className="font-serif text-2xl text-ink-mid">No classes scheduled at the moment.</p>
            <p className="text-ink-light text-sm mt-2 max-w-xs mx-auto leading-relaxed">
              Follow us on{" "}
              <a
                href="https://instagram.com/bathhouse.arts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta underline underline-offset-2"
              >
                @bathhouse.arts
              </a>{" "}
              to be the first to know when new classes drop.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {displayed.map((entry) => (
              <ClassCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}

        {isPreview ? (
          <div className="text-center mt-10">
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-ink/20 text-ink font-medium rounded-full hover:border-terracotta hover:text-terracotta transition-colors text-sm"
            >
              View all classes
              <ArrowRight />
            </Link>
          </div>
        ) : (
          <p className="text-center text-sm text-ink-light mt-10">
            New classes added regularly.{" "}
            <a
              href="/#contact"
              className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark transition-colors"
            >
              Get in touch
            </a>{" "}
            to stay in the loop.
          </p>
        )}
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
