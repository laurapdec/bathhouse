import Image from "next/image";
import bathhouseImg from "@/public/bathhouse.png";
import photo1 from "@/public/1.jpg";
import photo2 from "@/public/2.jpg";

export default function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden min-h-[90vh] flex items-center">
      {/* Decorative background element */}
      <div
        aria-hidden
        className="absolute right-0 top-0 h-full w-1/2 md:w-2/5 bg-sand opacity-60 -skew-x-6 translate-x-16"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-8 animate-fade-up">
          <div className="inline-block text-xs font-medium tracking-widest uppercase text-ink bg-terracotta/10 px-3 py-1.5 rounded-full">
            New York City
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.05] tracking-tight">
            Actors gather here.
          </h1>

          <p className="text-ink-mid text-xl md:text-2xl leading-snug font-serif italic">
            To train. To teach. To risk.
          </p>

          <p className="text-ink-mid text-lg md:text-xl leading-relaxed max-w-md">
            Pay what you can. Bring what you have. Leave with more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#schedule"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-terracotta text-cream font-medium rounded-full hover:bg-terracotta-dark transition-colors text-sm tracking-wide"
            >
              See the Schedule
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-ink/20 text-ink font-medium rounded-full hover:border-terracotta hover:text-terracotta transition-colors text-sm tracking-wide"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Photos : natural sizes, like on a table */}
        <div className="hidden md:flex items-start gap-5 pt-8 animate-fade-in [animation-delay:0.25s]">
          <div className="rotate-1 shadow-lg ring-4 ring-cream flex-shrink-0">
            <div className="overflow-hidden rounded-sm">
              <Image
                src={bathhouseImg}
                alt="Bathhouse acting class"
                placeholder="blur"
                className="w-[160px] h-auto block"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10 flex-shrink-0">
            <div className="-rotate-2 shadow-lg ring-4 ring-cream">
              <div className="overflow-hidden rounded-sm">
                <Image
                  src={photo1}
                  alt="Bathhouse acting class"
                  placeholder="blur"
                  className="w-[300px] h-auto block"
                />
              </div>
            </div>
            <div className="rotate-1 shadow-md ring-4 ring-cream">
              <div className="overflow-hidden rounded-sm">
                <Image
                  src={photo2}
                  alt="Bathhouse acting class"
                  placeholder="blur"
                  className="w-[300px] h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
