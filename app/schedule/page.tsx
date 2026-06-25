import type { Metadata } from "next";
import { getEvents } from "@/lib/eventbrite";
import type { Event } from "@/lib/eventbrite";
import ClassCard from "@/components/ClassCard";
import NewsletterSection from "@/components/NewsletterSection";
import { longFormCourses } from "@/lib/courses";
import CourseCalendar from "@/components/CourseCalendar";

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
              <p className="text-xs font-medium tracking-widest uppercase text-ink mb-4">
                What&rsquo;s on
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink leading-tight">
                Upcoming Classes
              </h1>
            </div>
            <p className="text-ink-mid max-w-sm leading-relaxed md:text-right">
              Every class is pay-what-you-can. Reserve your spot through the links below.
            </p>
          </div>
        </div>
      </section>

      {/* Class grid */}
      {classes.length > 0 && (
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {classes.map((entry) => (
                <ClassCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Long-form courses */}
      <section className="bg-cream py-16 md:py-20 border-t border-sand">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            Long-Form Courses
          </h2>
          <p className="text-ink-mid leading-relaxed max-w-2xl mb-12">
            Donation-based courses for sustained, process-driven work in small groups. These are not drop-in — participation requires commitment from beginning to end. Application required.
          </p>

          <CourseCalendar />

          {/* Course details */}
          <div className="mt-12 space-y-6">
            {longFormCourses.map((course) => (
              <article
                key={course.id}
                id={`course-${course.id}`}
                className="bg-surface rounded-2xl p-6 md:p-8 border border-sand hover:border-terracotta/40 transition-colors scroll-mt-24"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`inline-block w-3 h-3 rounded-full ${course.dot}`} />
                      <span className="text-xs font-medium bg-terracotta/10 text-terracotta px-2.5 py-0.5 rounded-full">
                        {course.type}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-ink">
                      {course.title}
                    </h3>
                    <p className="text-sm text-ink font-medium">{course.teacher}</p>
                    <p className="text-sm text-ink-mid">{course.schedule}</p>
                    <p className="text-ink-mid text-sm leading-relaxed mt-2">{course.body}</p>
                  </div>
                  <a
                    href={course.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 bg-terracotta text-[#304948] text-sm font-medium rounded-full hover:bg-terracotta-dark transition-colors"
                  >
                    Apply
                  </a>
                </div>
              </article>
            ))}
          </div>
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
                Reserve your spot through the sign-up links on each class. Spots are limited.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}

