import NewsletterSignup from "./NewsletterSignup";
import Reveal from "./Reveal";

export default function NewsletterSection() {
  return (
    <section className="bg-sand/40 py-16 md:py-20 border-y border-sand">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-xl">
          <p className="text-xs font-medium tracking-widest uppercase text-ink   mb-3">
            Stay in the loop
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink leading-tight mb-3">
            New classes, straight to your inbox.
          </h2>
          <p className="text-ink-mid text-sm leading-relaxed mb-7">
            We add classes regularly. Drop your email
            and we&rsquo;ll keep you posted with a weekly
            newsletter with updates.
          </p>
          <NewsletterSignup variant="light" />
        </Reveal>
      </div>
    </section>
  );
}
