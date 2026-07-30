import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import NewsletterSection from "@/components/NewsletterSection";
import TeacherFeed from "@/components/TeacherFeed";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Bathhouse Arts Initiative is a pay-what-you-can community acting space in New York City. Our story, mission, values, and the people behind it.",
};

function getTeacherPosts() {
  const dir = path.join(process.cwd(), "public", "teachers");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f)).sort();
  const postMap = new Map<string, string[]>();
  for (const file of files) {
    const match = file.match(/^(p_[^(]+)\(/);
    const postId = match ? match[1] : file;
    if (!postMap.has(postId)) postMap.set(postId, []);
    postMap.get(postId)!.push(file);
  }
  return Array.from(postMap.entries()).map(([id, photos]) => ({
    id,
    photos,
    url: `https://www.instagram.com/${id.replace("p_", "p/")}`,
  }));
}

const teacherPosts = getTeacherPosts();

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream pt-16 pb-12 md:pt-24 md:pb-16 border-b border-sand animate-curtain-rise">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-ink mb-4">
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
                meaningful actor training is often financially out of reach,
                while many experienced artists have valuable knowledge they
                rarely have the opportunity to pass on.
              </p>
              <p className="text-ink-mid leading-relaxed text-lg">
                We believe training should be accessible, collaborative, and
                rooted in community. Our goal is to create a space where
                emerging artists can continue developing their craft while
                experienced practitioners can teach, mentor, experiment, and
                share what years of work have taught them. Everyone has
                something to learn, and everyone has something to offer.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-ink">
                What we do
              </h2>
              <p className="text-ink-mid leading-relaxed text-lg">
                We produce and promote classes, workshops, creative projects,
                and community events led by working artists from a wide range
                of disciplines. Rather than following a single methodology, we
                invite each instructor to share the tools, perspectives, and
                practices that have shaped their own artistic journey.
              </p>
              <p className="text-ink-mid leading-relaxed text-lg">
                Whether you&rsquo;re taking your very first class or have years
                of professional experience, Bathhouse is a place to train,
                collaborate, meet other artists, and continue growing
                alongside a supportive creative community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pay-what-you-can philosophy */}
      <section className="bg-ink-bg py-16 md:py-24">
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
          <p className="text-xs font-medium tracking-widest uppercase text-ink mb-4">
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

      {/* Photo gallery */}
      <section className="bg-cream py-16 md:py-24 border-t border-sand">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-ink mb-3">
                Community
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
                @bathhouse.arts
              </h2>
            </div>
            <a
              href="https://instagram.com/bathhouse.arts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-mid hover:text-terracotta transition-colors"
            >
              Follow us on Instagram
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              "p_DMuEVDBssBR(0).jpg",
              "p_DMuEVDBssBR(1).jpg",
              "p_DMuEVDBssBR(2).jpg",
              "p_DMuEVDBssBR(3).jpg",
              "p_DMuEVDBssBR(4).jpg",
            ].map((photo, i) => (
              <a
                key={i}
                href={`https://www.instagram.com/p/DMuEVDBssBR/?img_index=${i + 1}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`aspect-square overflow-hidden rounded-xl bg-sand group${
                  i === 4 ? " col-span-2 md:col-span-1" : ""
                }`}
              >
                <img
                  src={`/whoweare/${photo}`}
                  alt="Bathhouse Arts community"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={
                    i === 2 ? { objectPosition: "center 25%" } :
                    i === 3 ? { objectPosition: "center 75%" } :
                    undefined
                  }
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="bg-cream py-16 md:py-24 border-t border-sand">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-ink mb-3">
                The people
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
                Our Collaborators
              </h2>
            </div>
            <a
              href="https://instagram.com/bathhouse.arts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-mid hover:text-terracotta transition-colors"
            >
              @bathhouse.arts
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
          <TeacherFeed posts={teacherPosts} />
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
            className="inline-flex items-center justify-center px-7 py-3.5 bg-terracotta text-[#304948] font-medium rounded-full hover:bg-terracotta-dark transition-colors text-sm flex-shrink-0"
          >
            See the Schedule
          </Link>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}

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
