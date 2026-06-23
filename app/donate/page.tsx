import type { Metadata } from "next";
import Link from "next/link";
import DonationPicker from "@/components/DonationPicker";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Bathhouse Arts Initiative and help keep pay-what-you-can acting classes accessible to everyone in New York City.",
};

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-16 pb-12 md:pt-24 md:pb-16 border-b border-sand">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-terracotta mb-4">
            Support the work
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight max-w-2xl">
            Keep the door<br />
            <span className="italic text-terracotta">open.</span>
          </h1>
          <p className="text-ink-mid text-lg md:text-xl leading-relaxed max-w-xl mt-6">
            Bathhouse runs on pay-what-you-can tuition and the generosity of
            people who believe the stage should belong to everyone. Your
            donation makes that possible.
          </p>
        </div>
      </section>

      {/* Donation picker */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <DonationPicker />
        </div>
      </section>

      {/* Impact */}
      <section className="bg-sand/40 border-t border-sand py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-12">
            Where your money goes
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {impacts.map((item) => (
              <div key={item.title} className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-terracotta/15 flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-terracotta">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-ink-mid text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other ways to help */}
      <section className="bg-ink-bg py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-terracotta mb-3">
            Beyond donations
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-12">
            Other ways to support
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="group rounded-2xl border border-cream/10 hover:border-terracotta/30 bg-white/5 p-8 flex flex-col gap-4 transition-colors">
              <div className="w-11 h-11 rounded-full bg-terracotta/15 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dcc88f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-cream">
                Come to a class
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                Reserve a spot on Eventbrite and pay what you can. Every ticket
                helps sustain the space for everyone.
              </p>
              <Link
                href="/schedule"
                className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-terracotta text-[#2C2217] text-sm font-medium rounded-full hover:bg-terracotta-dark transition-colors w-fit"
              >
                See the schedule
                <ArrowIcon />
              </Link>
            </div>
            <div className="group rounded-2xl border border-cream/10 hover:border-terracotta/30 bg-white/5 p-8 flex flex-col gap-4 transition-colors">
              <div className="w-11 h-11 rounded-full bg-terracotta/15 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dcc88f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="#dcc88f" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-cream">
                Spread the word
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                Tell someone who should know about us. Share on Instagram.
                Bring a friend to class.
              </p>
              <a
                href="https://instagram.com/bathhouse.arts"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 border border-cream/20 text-cream text-sm font-medium rounded-full hover:border-cream/50 hover:bg-cream/5 transition-colors w-fit"
              >
                @bathhouse.arts
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const impacts = [
  {
    icon: "◎",
    title: "Subsidized tuition",
    body: "Donations cover the gap between what students pay and what it actually costs to run a class, so no one has to choose between rent and theater.",
  },
  {
    icon: "⌂",
    title: "Space & equipment",
    body: "Keeping a dedicated space in New York City isn't cheap. Your support keeps the lights on and the room available.",
  },
];
