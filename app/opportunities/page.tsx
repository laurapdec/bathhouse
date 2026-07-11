import type { Metadata } from "next";
import NewsletterSection from "@/components/NewsletterSection";
import HeadshotReels, { HEADSHOT_RAFFLE_FORM_URL } from "@/components/HeadshotReels";
import StrangersInThePark from "@/components/StrangersInThePark";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Open calls, teaching opportunities, and collaborations at Bathhouse Arts Initiative.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <section className="bg-cream pt-16 pb-12 md:pt-24 md:pb-16 border-b border-sand animate-curtain-rise">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-ink mb-4">Opportunities</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight max-w-2xl">
            What&rsquo;s happening.
          </h1>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <article className="border border-sand rounded-2xl p-8 hover:border-terracotta/40 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div className="space-y-2 flex-1">
                <span className="inline-block text-xs font-medium bg-terracotta/10 text-terracotta px-2.5 py-0.5 rounded-full">Giveaway</span>
                <h2 className="font-serif text-2xl font-bold text-ink">Monthly Headshot Raffle</h2>
                <p className="text-ink-mid leading-relaxed">
                  Every month we raffle a free professional headshot session for one member of our community. Fill out the form to enter and stay posted on the next draw.
                </p>
              </div>
              <a
                href={HEADSHOT_RAFFLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 bg-terracotta text-[#304948] text-sm font-medium rounded-full hover:bg-terracotta-dark transition-colors"
              >
                Enter the Raffle
              </a>
            </div>
            <p className="text-xs font-medium tracking-widest uppercase text-ink-light mb-4">Winners</p>
            <HeadshotReels />
          </article>

          <StrangersInThePark />
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}

