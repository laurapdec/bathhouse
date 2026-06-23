import type { Metadata } from "next";
import { getEvents } from "@/lib/eventbrite";
import type { Event } from "@/lib/eventbrite";
import ClassCard from "@/components/ClassCard";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Upcoming pay-what-you-can acting classes and workshops at Bathhouse Arts Initiative in New York City.",
};

export default async function SchedulePage() {
  const classes: Event[] = await getEvents();
  return (
    <>
      {/* Page header */}
      <section className="bg-cream pt-16 pb-12 md:pt-24 md:pb-16 border-b border-sand">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-terracotta mb-4">
                What&rsquo;s on
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink leading-tight">
                Upcoming Classes
              </h1>
            </div>
            <p className="text-ink-mid max-w-sm leading-relaxed md:text-right">
              Every class is pay-what-you-can. No audition, no prerequisites.
              just show up.
            </p>
          </div>
        </div>
      </section>

      {/* Class grid */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {classes.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-ink-mid">
                No classes scheduled at the moment.
              </p>
              <p className="text-ink-light text-sm mt-2">
                Check back soon or{" "}
                <a
                  href="/#contact"
                  className="text-terracotta underline underline-offset-2"
                >
                  get in touch
                </a>{" "}
                to be notified.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {classes.map((entry) => (
                <ClassCard key={entry.id} entry={entry} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PWYW explainer */}
      <section className="bg-sand/40 border-t border-sand py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-semibold text-ink">
                How much do I pay?
              </h3>
              <p className="text-ink-mid text-sm leading-relaxed">
                Whatever you can genuinely afford. There&rsquo;s no right
                answer. Pay what feels fair to you.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-semibold text-ink">
                Do I need experience?
              </h3>
              <p className="text-ink-mid text-sm leading-relaxed">
                Most classes are open to all levels. If not, it will be specified.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-semibold text-ink">
                How do I sign up?
              </h3>
              <p className="text-ink-mid text-sm leading-relaxed">
                Join the other 
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
