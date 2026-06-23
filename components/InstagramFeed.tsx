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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-terracotta mb-3">
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
        </div>

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

function PlaceholderGrid() {
  return (
    <div
      className="grid grid-cols-3 gap-3 md:gap-4"
      role="img"
      aria-label="Instagram feed placeholder: will be populated once connected"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-xl bg-sand/60 border border-sand flex items-center justify-center"
        >
          <InstagramIcon className="text-ink-light/40 w-8 h-8" />
        </div>
      ))}
      <div className="col-span-3 text-center mt-2">
        <p className="text-xs text-ink-light italic">
          Instagram feed (connect API to populate)
        </p>
      </div>
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
