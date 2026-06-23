import type { Metadata } from "next";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What students and participants say about Bathhouse Arts Initiative.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-cream pt-16 pb-12 md:pt-24 md:pb-16 border-b border-sand">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-terracotta mb-4">Testimonials</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight max-w-2xl">
            In their<br />
            <span className="italic text-terracotta">own words.</span>
          </h1>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="break-inside-avoid bg-sand/30 border border-sand rounded-2xl p-7 space-y-4"
            >
              <p className="font-serif text-lg text-ink leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-xs text-ink-light mt-0.5">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}

const testimonials = [
  {
    name: "Your Name",
    role: "Student, Scene Study",
    quote: "Add your testimonial here.",
  },
  {
    name: "Your Name",
    role: "Student, Improv",
    quote: "Add your testimonial here.",
  },
  {
    name: "Your Name",
    role: "Student, Voice & Text",
    quote: "Add your testimonial here.",
  },
];
