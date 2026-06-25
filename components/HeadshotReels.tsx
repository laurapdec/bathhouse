"use client";

const headshotReels = [
  { img: "p_DZTb4CijMb6_(0).png", url: "https://www.instagram.com/p/DZTb4CijMb6/", month: "June" },
  { img: "p_DYDSVtRiZAx_(0).png", url: "https://www.instagram.com/p/DYDSVtRiZAx/", month: "May" },
  { img: "p_DWuBZZrEUYX_(0).png", url: "https://www.instagram.com/p/DWuBZZrEUYX/", month: "April" },
  { img: "p_DVh2GE7jLS8_(0).png", url: "https://www.instagram.com/p/DVh2GE7jLS8/", month: "March" },
];

export default function HeadshotReels() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
      {/* Next month placeholder */}
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-ink-light mb-2">July</p>
        <div className="aspect-[9/16] overflow-hidden rounded-xl bg-sand/60 border-2 border-dashed border-sand flex flex-col items-center justify-center gap-3">
          <span className="text-4xl text-ink-light/40">?</span>
          <span className="text-sm font-serif font-semibold text-ink-light/60">You?</span>
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
