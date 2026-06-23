"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/schedule", label: "Schedule" },
  { href: "/about", label: "Who We Are" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/archives", label: "Archives" },
  { href: "/#contact", label: "Contact" },
];


export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sand">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-semibold text-ink tracking-tight leading-tight"
        >
          <Image src="/bathhouse.png" alt="Logo" width={24} height={30} className="inline-block ml-2 mb-4 w-6 h-auto" style={{ height: "auto" }} />
          BathHouse<span className="text-terracotta"> Arts</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5">
          {links.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              label={label}
              active={pathname === href}
            />
          ))}
          <ThemeToggle />
          <Link
            href="/donate"
            className="px-4 py-2 bg-terracotta text-cream text-sm font-medium rounded-full hover:bg-terracotta-dark transition-colors"
          >
            Donate
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-0.5 bg-ink transition-transform duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-sand bg-cream px-6 py-5 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              label={label}
              active={pathname === href}
              onClick={() => setOpen(false)}
            />
          ))}
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="inline-block px-4 py-2 bg-terracotta text-cream text-sm font-medium rounded-full hover:bg-terracotta-dark transition-colors text-center"
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-xs font-medium tracking-wide uppercase transition-colors ${
        active
          ? "text-terracotta"
          : "text-ink-mid hover:text-terracotta"
      }`}
    >
      {label}
    </Link>
  );
}
