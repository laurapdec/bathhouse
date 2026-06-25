import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Ways to participate in Bathhouse Arts Initiative as a student, volunteer, teacher, or supporter.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-cream pt-16 pb-12 md:pt-24 md:pb-16 border-b border-sand">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-ink mb-4">Get involved</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight max-w-2xl">
            There&rsquo;s a place<br />
            <span className="italic text-terracotta">for you here.</span>
          </h1>
          <p className="text-ink-mid text-lg leading-relaxed max-w-xl mt-6">
            Whether you want to perform, learn, teach, volunteer, or just be in the room: we have a way in.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 gap-6">
          {ways.map((w) => (
            <div key={w.title} className="bg-sand/30 rounded-2xl p-8 space-y-4 border border-sand">
              <div className="w-10 h-10 rounded-full bg-terracotta/15 flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-terracotta">{w.icon}</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-ink">{w.title}</h2>
              <p className="text-ink-mid leading-relaxed">{w.body}</p>
              {w.href && (
                <Link href={w.href} className="inline-block text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors">
                  {w.cta} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}

const ways = [
  {
    icon: "◎",
    title: "Take a class",
    body: "Pay what you can. No audition, no prerequisites. Reserve a spot through our schedule — we have something for every level.",
    href: "/schedule",
    cta: "See the schedule",
  },
  {
    icon: "✦",
    title: "Teach or lead a workshop",
    body: "Are you a working artist with something to share? We're always looking for collaborators to lead sessions.",
    href: "https://www.instagram.com/direct/t/17846873070525646/",
    cta: "Send us your pitch",
  },
  {
    icon: "⌂",
    title: "Volunteer",
    body: "Help us run the space: front of house, communications, events. A few hours goes a long way.",
    href: "/#contact",
    cta: "Get in touch",
  },
  {
    icon: "↗",
    title: "Donate",
    body: "If you can afford to give, your contribution directly subsidizes classes for those who can't.",
    href: "/donate",
    cta: "Support us",
  },
];
