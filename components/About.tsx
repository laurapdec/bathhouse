import Image from "next/image";
import photo3 from "@/public/3.jpg";
import photo4 from "@/public/4.jpg";
import Link from "next/link";
import Reveal from "./Reveal";

type Props = {
  /** When true, shows a "Read our full story" link to /about */
  preview?: boolean;
};

export default function About({ preview }: Props) {
  return (
    <section id="about" className="bg-sand/40 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: photos. natural sizes, like on a table */}
          <div className="hidden md:flex items-start gap-4">
            <div className="-rotate-2 shadow-lg ring-4 ring-cream flex-shrink-0">
              <div className="overflow-hidden rounded-sm">
                <Image
                  src={photo3}
                  alt="Bathhouse acting class"
                  placeholder="blur"
                  className="w-[228px] h-auto block"
                />
              </div>
            </div>
            <div className="rotate-2 shadow-md ring-4 ring-cream flex-shrink-0 mt-16">
              <div className="overflow-hidden rounded-sm">
                <Image
                  src={photo4}
                  alt="Bathhouse acting class"
                  placeholder="blur"
                  className="w-[192px] h-auto block"
                />
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className="space-y-6">
            <Reveal>
              <p className="text-xs font-medium tracking-widest uppercase text-ink mb-3">
                Our Philosophy
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
                Theater belongs<br />to all of us.
              </h2>
            </Reveal>

            <p className="text-ink-mid leading-relaxed text-base md:text-lg">
              We believe acting is something you practice, not something you
              finish learning.
            </p>

            <p className="text-ink-mid leading-relaxed text-base md:text-lg">
              Bathhouse brings together actors, teachers, directors, writers,
              and curious minds to train, create, and learn from one another.
              No single method. No single path. Just a shared commitment to
              growth.
            </p>

            <p className="text-ink-mid leading-relaxed text-base md:text-lg">
              Whether you&rsquo;re stepping into a studio for the first time or
              returning after years of experience, you&rsquo;ll find a place to
              train, collaborate, meet fellow artists, and keep your craft
              alive.
            </p>

            <Reveal delay={200}>
            <blockquote className="border-l-2 border-terracotta pl-4 italic text-ink-mid text-sm leading-relaxed">
              &ldquo;Some exercises are like showers. No matter how many you&rsquo;ve
              taken, it&rsquo;s never going to be enough for the rest of your life.&rdquo;
            </blockquote>
            </Reveal>

            <Reveal delay={300}>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-sand">
              <Stat value="Pay-What-You-Can" label="Every class, every time" />
              <Stat value="All levels" label="No audition required" />
              <Stat value="NYC" label="Community-rooted" />
              <Stat value="Human-first" label="Not a factory" />
            </div>
            </Reveal>

            {preview && (
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-terracotta-dark transition-colors"
              >
                Read our full story
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-xl font-bold text-terracotta">{value}</p>
      <p className="text-xs text-ink-mid mt-0.5">{label}</p>
    </div>
  );
}
