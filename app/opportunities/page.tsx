import type { Metadata } from "next";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Open calls, teaching opportunities, and collaborations at Bathhouse Arts Initiative.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <section className="bg-cream pt-16 pb-12 md:pt-24 md:pb-16 border-b border-sand">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-ink mb-4">Opportunities</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight max-w-2xl">
            Work with us.
          </h1>
          <p className="text-ink-mid text-lg leading-relaxed max-w-xl mt-6">
            Open calls, residencies, teaching posts, and collaboration invitations.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {opportunities.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-ink-mid">Nothing open right now.</p>
              <p className="text-ink-light text-sm mt-2">
                Check back soon or{" "}
                <a href="/#contact" className="text-terracotta underline underline-offset-2">get in touch</a>{" "}
                to express interest.
              </p>
            </div>
          ) : (
            opportunities.map((o) => (
              <article key={o.title} className="border border-sand rounded-2xl p-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6 hover:border-terracotta/40 transition-colors">
                <div className="space-y-2 flex-1">
                  <span className="inline-block text-xs font-medium bg-terracotta/10 text-terracotta px-2.5 py-0.5 rounded-full">{o.type}</span>
                  <h2 className="font-serif text-2xl font-bold text-ink">{o.title}</h2>
                  <p className="text-ink-mid leading-relaxed">{o.body}</p>
                  {o.deadline && (
                    <p className="text-xs text-ink-light">Deadline: {o.deadline}</p>
                  )}
                </div>
                <a
                  href={o.cta?.href ?? "/#contact"}
                  target={o.cta?.href.startsWith("http") ? "_blank" : undefined}
                  rel={o.cta?.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 bg-terracotta text-[#304948] text-sm font-medium rounded-full hover:bg-terracotta-dark transition-colors"
                >
                  {o.cta?.label ?? "Apply"}
                </a>
              </article>
            ))
          )}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}

const opportunities: { title: string; type: string; body: string; deadline?: string; cta?: { label: string; href: string } }[] = [
  {
    title: "Monthly Headshot Raffle",
    type: "Giveaway",
    body: "Every month we raffle a free professional headshot session for one member of our community. Follow us on Instagram to enter and stay posted on the next draw.",
    cta: { label: "Follow @bathhouse.arts", href: "https://instagram.com/bathhouse.arts" },
  },
];
