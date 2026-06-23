import Link from "next/link";

const columns = [
  {
    heading: "Program",
    links: [
      { href: "/schedule", label: "Schedule" },
      { href: "/archives", label: "Archives" },
      { href: "/testimonials", label: "Testimonials" },
    ],
  },
  {
    heading: "Community",
    links: [
      { href: "/about", label: "Who We Are" },
      { href: "/get-involved", label: "Get Involved" },
      { href: "/opportunities", label: "Opportunities" },
    ],
  },
  {
    heading: "Support",
    links: [
      { href: "/donate", label: "Donate" },
      { href: "/#contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-bg border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <p className="font-serif text-lg font-semibold text-cream leading-tight">
              BathHouse<span className="text-terracotta"> Arts</span>
            </p>
            <p className="text-cream/50 text-sm leading-relaxed">
              Pay-what-you-can acting classes and community in New York City.
            </p>
            <a
              href="https://instagram.com/bathhouse.arts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/40 hover:text-cream/80 transition-colors text-sm"
              aria-label="Instagram"
            >
              <InstagramIcon />
              @bathhouse.arts
            </a>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading} className="space-y-4">
              <p className="text-xs font-medium tracking-widest uppercase text-cream/30">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-cream/50 hover:text-cream/90 transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/30 text-xs">
            &copy; {year} Bathhouse Arts Initiative. New York City.
          </p>
          <a
            href="mailto:info@bathhousearts.com"
            className="text-cream/30 hover:text-cream/60 transition-colors text-xs"
          >
            info@bathhousearts.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
