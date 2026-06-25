import Reveal from "./Reveal";

type InstagramPost = {
  id: string;
  imageUrl: string;
  caption?: string;
  permalink?: string;
};

type Props = {
  posts: InstagramPost[];
};

export default function InstagramFeed({ posts }: Props) {
  const isEmpty = posts.length === 0;

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
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
            <ArrowRight />
          </a>
        </Reveal>

        {isEmpty ? (
          <PlaceholderGrid />
        ) : (
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden rounded-xl bg-sand group"
              >
                <img
                  src={post.imageUrl}
                  alt={post.caption ?? ""}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const fallbackPhotos = [
  "p_DMh2ZT7sEmm(0).jpg",
  "p_DMh2ZT7sEmm(1).jpg",
  "p_DMh2ZT7sEmm(2).jpg",
  "p_DMh2ZT7sEmm(3).jpg",
  "p_DMh2ZT7sEmm(4).jpg",
  "p_DMh2ZT7sEmm(5).jpg",
];

function PlaceholderGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {fallbackPhotos.map((photo, i) => (
        <a
          key={i}
          href={`https://www.instagram.com/p/DMh2ZT7sEmm/?img_index=${i + 1}`}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square overflow-hidden rounded-xl bg-sand group"
        >
          <img
            src={`/instagram_fallback/${photo}`}
            alt="Bathhouse Arts on Instagram"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            style={
              i === 0 ? { objectPosition: "center 60%" } :
              i === 4 ? { objectPosition: "center 30%" } :
              i === 5 ? { objectPosition: "center 30%" } :
              undefined
            }
          />
        </a>
      ))}
    </div>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
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
  );
}
