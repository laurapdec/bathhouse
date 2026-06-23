import type { Metadata } from "next";
import Link from "next/link";

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

      {/* Widget */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <givebutter-widget id="jb5Ekp" />
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
      <section className="bg-ink py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-8">
            Other ways to support
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 space-y-2">
              <h3 className="font-serif text-lg font-semibold text-cream">
                Come to a class
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                Pay what you can. Even a little helps sustain the space for
                everyone.
              </p>
              <Link
                href="/schedule"
                className="inline-block mt-2 text-sm text-terracotta hover:text-terracotta-dark transition-colors"
              >
                See the schedule →
              </Link>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 space-y-2">
              <h3 className="font-serif text-lg font-semibold text-cream">
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
                className="inline-block mt-2 text-sm text-terracotta hover:text-terracotta-dark transition-colors"
              >
                @bathhouse.arts →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
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
  {
    icon: "✦",
    title: "Artist fees",
    body: "We pay our teachers fairly. Donations help us honor the work of artists who give their time and expertise to the community.",
  },
];
