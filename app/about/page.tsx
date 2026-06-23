import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Bathhouse Arts Initiative is a pay-what-you-can community acting space in New York City. Our story, mission, values, and the people behind it.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream pt-16 pb-12 md:pt-24 md:pb-16 border-b border-sand">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-terracotta mb-4">
            Who we are
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight max-w-2xl">
            Theater belongs<br />
            <span className="italic text-terracotta">to all of us.</span>
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-ink">
                Why we exist
              </h2>
              <p className="text-ink-mid leading-relaxed text-lg">
                Bathhouse Arts Initiative was born from a simple frustration:
                acting classes in New York City are expensive. Often
                prohibitively so. The result is a version of the craft that
                is, by default, only accessible to those who can afford it.
              </p>
              <p className="text-ink-mid leading-relaxed text-lg">
                We wanted to build something different: a welcoming and
                supportive environment for actors at every stage of their
                journey, rooted in movement, presence, ensemble connection, and
                improvisation.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-ink">
                What we actually do
              </h2>
              <p className="text-ink-mid leading-relaxed text-lg">
                We run weekly classes ranging from scene study and Meisner technique to voice
                work, physical theater, and improv. Some are for beginners.
                Some are for people with experience. Most are for everyone.
              </p>
              <p className="text-ink-mid leading-relaxed text-lg">
               Beginners are invited to explore. Veterans are encouraged to teach.
               Each session runs for two hours, followed by an open stage: 
               one hour to workshop scenes, monologues, auditions or simply express
                yourself. No pressure, just presence. The space is yours. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pay-what-you-can philosophy */}
      <section className="bg-ink py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-xs font-medium tracking-widest uppercase text-terracotta">
              Our model
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream leading-tight">
              Pay what you can.<br />Really.
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed">
              We mean it. There&rsquo;s no suggested donation range designed to
              make you feel guilty. You decide what the class is worth to you,
              what you can genuinely afford, and you pay that.
            </p>
            <p className="text-cream/70 text-lg leading-relaxed">
              People who can pay more make it possible for people who
              can&rsquo;t. That&rsquo;s the whole thing. It works because the
              community makes it work.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-terracotta mb-4">
            What we stand for
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-12">
            How we try to show up
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-terracotta/15 flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-terracotta">
                    {v.icon}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="text-ink-mid text-sm leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People */}
      <section className="bg-cream py-16 md:py-24 border-t border-sand">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-terracotta mb-4">
            The people
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-14">
            The room wouldn&rsquo;t exist without them.
          </h2>

          {people.map((group) => (
            <div key={group.category} className="mb-14 last:mb-0">
              <h3 className="text-xs font-medium tracking-widest uppercase text-ink-light mb-8 border-b border-sand pb-3">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {group.members.map((p) => (
                  <div key={p.name} className="flex flex-col items-center text-center gap-3">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-serif font-bold text-cream flex-shrink-0"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.initials}
                    </div>
                    <div>
                      <p className="font-medium text-ink text-sm leading-tight">{p.name}</p>
                      <p className="text-ink-light text-xs mt-0.5">{p.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand/40 py-16 border-t border-sand">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
              Ready to get in the room?
            </h2>
            <p className="text-ink-mid mt-1">
              See what&rsquo;s on this week.
            </p>
          </div>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-terracotta text-cream font-medium rounded-full hover:bg-terracotta-dark transition-colors text-sm flex-shrink-0"
          >
            View the Schedule
          </Link>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}

const colors = ["#d4c58d", "#C97B6E", "#7A9068", "#304948", "#d2a660", "#6B5642"];

const people: { category: string; members: { name: string; role: string; initials: string; color: string }[] }[] = [
  {
    category: "Team & Administration",
    members: [
      { name: "Your Name", role: "Founder & Director", initials: "YN", color: colors[0] },
    ],
  },
  {
    category: "Instructors",
    members: [
      { name: "Bruno Rigobello", role: "Scene Study & Improv", initials: "BR", color: colors[1] },
      { name: "Susana Yasan", role: "Physical Theater", initials: "SY", color: colors[2] },
      { name: "Laura Petit", role: "Movement & Presence", initials: "LP", color: colors[4] },
      { name: "James Wagner", role: "Physical Theater", initials: "JW", color: colors[3] },
    ],
  },
  {
    category: "Collaborators",
    members: [
      { name: "Your Name", role: "Collaborator", initials: "YN", color: colors[2] },
      { name: "Your Name", role: "Collaborator", initials: "YN", color: colors[5] },
    ],
  },
  {
    category: "Community",
    members: [
      { name: "Your Name", role: "Student", initials: "YN", color: colors[4] },
      { name: "Your Name", role: "Student", initials: "YN", color: colors[0] },
      { name: "Your Name", role: "Student", initials: "YN", color: colors[3] },
      { name: "Your Name", role: "Student", initials: "YN", color: colors[1] },
    ],
  },
];

const values = [
  {
    icon: "↗",
    title: "Radically accessible",
    body: "No auditions, no prerequisites, no income requirements. If you want to be here, you can be here.",
  },
  {
    icon: "◎",
    title: "Genuinely rigorous",
    body: "Accessible doesn't mean watered down. We take the work and the people doing it seriously.",
  },
  {
    icon: "✦",
    title: "Community over product",
    body: "We're not training you for a specific outcome. We're building a room of people who want to make something together.",
  },
  {
    icon: "⌂",
    title: "Artist-led",
    body: "Our teachers are working artists who are still in the middle of their own practice. Real experience, shared honestly.",
  },
  {
    icon: "◑",
    title: "Non-judgmental",
    body: "Mess up. Try the wrong thing. Be uncertain. That's what the space is for.",
  },
  {
    icon: "∞",
    title: "Sustainable by design",
    body: "The pay-what-you-can model keeps the lights on while keeping the door open. We've built it to last.",
  },
];
