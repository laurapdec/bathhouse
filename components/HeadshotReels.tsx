"use client";

import { useEffect, useState } from "react";

export const HEADSHOT_RAFFLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSek2qMItW27km0ava58K2mJGUphmpLVsMTaTIR019g9125flQ/viewform";

const headshotReels = [
  { img: "p_DZTb4CijMb6_(0).png", url: "https://www.instagram.com/p/DZTb4CijMb6/", month: "June" },
  { img: "p_DYDSVtRiZAx_(0).png", url: "https://www.instagram.com/p/DYDSVtRiZAx/", month: "May" },
  { img: "p_DWuBZZrEUYX_(0).png", url: "https://www.instagram.com/p/DWuBZZrEUYX/", month: "April" },
  { img: "p_DVh2GE7jLS8_(0).png", url: "https://www.instagram.com/p/DVh2GE7jLS8/", month: "March" },
];

const NY_TIME_ZONE = "America/New_York";

function getNYParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: NY_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const map: Record<string, string> = {};
  for (const part of parts) map[part.type] = part.value;

  return {
    year: Number(map.year),
    month: Number(map.month),
    day: Number(map.day),
    hour: Number(map.hour) % 24, // some engines report midnight as "24"
    minute: Number(map.minute),
    second: Number(map.second),
  };
}

// Converts a NY-local wall-clock date (midnight) into the correct UTC
// timestamp, accounting for whichever side of the DST line it falls on.
function nyMidnightToUTC(year: number, month: number, day: number) {
  const guess = Date.UTC(year, month - 1, day);
  const guessedNYParts = getNYParts(new Date(guess));
  const guessedAsUTC = Date.UTC(
    guessedNYParts.year,
    guessedNYParts.month - 1,
    guessedNYParts.day,
    guessedNYParts.hour,
    guessedNYParts.minute,
    guessedNYParts.second
  );
  return guess + (guess - guessedAsUTC);
}

function getNextDrawParts() {
  const nyNow = getNYParts(new Date());
  let year = nyNow.year;
  let month = nyNow.month + 1;
  if (month > 12) {
    month = 1;
    year += 1;
  }
  return { year, month };
}

function getTimeLeft() {
  const now = new Date();
  const { year, month } = getNextDrawParts();
  const nextDrawUTC = nyMidnightToUTC(year, month, 1);
  const diff = Math.max(0, nextDrawUTC - now.getTime());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  };
}

function DrawCountdown() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="flex items-baseline gap-1 text-ink-light/70">
        <span className="font-serif text-base font-semibold text-ink">{timeLeft.days}</span>
        <span className="text-[10px] uppercase tracking-wide">d</span>
        <span className="font-serif text-base font-semibold text-ink">{timeLeft.hours}</span>
        <span className="text-[10px] uppercase tracking-wide">h</span>
        <span className="font-serif text-base font-semibold text-ink">{timeLeft.minutes}</span>
        <span className="text-[10px] uppercase tracking-wide">m</span>
      </div>
      <span className="text-[10px] uppercase tracking-widest text-ink-light/50">until next draw</span>
    </div>
  );
}

function EnterLink() {
  return (
    <a
      href={HEADSHOT_RAFFLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs font-medium text-ink hover:text-terracotta-dark transition-colors"
    >
      Enter →
    </a>
  );
}

export default function HeadshotReels() {
  const { year, month } = getNextDrawParts();
  const nextMonthLabel = new Date(Date.UTC(year, month - 1, 1)).toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
      {/* Next month placeholder */}
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-ink-light mb-2">{nextMonthLabel}</p>
        <div className="aspect-[9/16] overflow-hidden rounded-xl bg-sand/60 border-2 border-dashed border-sand flex flex-col items-center justify-center gap-3 p-2">
          <span className="text-4xl text-ink-light/40">?</span>
          <span className="text-sm font-serif font-semibold text-ink-light/60">You?</span>
          <DrawCountdown />
          <EnterLink />
        </div>
      </div>

      {headshotReels.map((reel) => (
        <div key={reel.month}>
          <p className="text-xs font-medium tracking-widest uppercase text-ink-light mb-2">{reel.month}</p>
          <a
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-[9/16] overflow-hidden rounded-xl bg-sand group relative"
          >
            <img
              src={`/headshots/${reel.img}`}
              alt={`${reel.month} headshot winner`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 gap-2">
              <InstagramIcon />
              <span className="text-white text-xs font-medium">Watch on Instagram</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
    </svg>
  );
}
