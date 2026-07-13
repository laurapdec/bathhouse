import { getStrangerStories } from "@/lib/strangers";

export const STRANGERS_SUBMIT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfg92ts7Y_9KIPhUw5RAcSpaALOQr9_pu1XhOuinCqbovVQpQ/viewform?usp=sharing";

const sampleStories = [
  { label: "Story 1" },
  { label: "Story 2" },
  { label: "Story 3" },
];

// Placeholder entries used only until real transcribed submissions (dropped
// as .txt files in content/strangers-in-the-park/) come in.
const placeholderStoryBank = [
  {
    name: "Diane, Prospect Park",
    excerpt:
      "She's lived three blocks from the park for forty years and still comes every morning to feed the same family of sparrows. Says she's outlived two husbands and one career, and the birds are the only ones who show up on time.",
  },
  {
    name: "Marcus, Washington Square",
    excerpt:
      "Moved to the city to be a musician, ended up managing a bodega, still plays every Sunday by the fountain. He said the day he stops playing here is the day he admits he gave up. So he hasn't stopped.",
  },
  {
    name: "Yuki, Domino Park",
    excerpt:
      "Was on her lunch break, hadn't told her family back home she'd been laid off two weeks earlier. Said the hardest part wasn't the money, it was rehearsing what she'd say to her mother on their next call.",
  },
];

export default function StrangersInThePark() {
  const submittedStories = getStrangerStories();
  const storyBank =
    submittedStories.length > 0
      ? submittedStories.map((story) => ({
          slug: story.slug,
          name: story.name,
          title: story.title as string | undefined,
          excerpt: story.excerpt,
          paragraphs: story.paragraphs,
        }))
      : placeholderStoryBank.map((story) => ({
          slug: story.name,
          name: story.name,
          title: undefined as string | undefined,
          excerpt: story.excerpt,
          paragraphs: [] as string[],
        }));
  const isPlaceholder = submittedStories.length === 0;

  return (
    <article className="border border-sand rounded-2xl p-8 hover:border-terracotta/40 transition-colors">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
        <div className="space-y-2 flex-1">
          <span className="inline-block text-xs font-medium bg-terracotta/10 text-terracotta px-2.5 py-0.5 rounded-full">Project</span>
          <h2 className="font-serif text-2xl font-bold text-ink">Strangers in the Park</h2>
          <p className="text-ink-mid leading-relaxed">
            Bruno goes to the park and talks with people he's never met. A few of those conversations
            become short stories, real moments, told with a fictitious name standing in for the real
            person. Our students turn each one into a scene to act out. Now it's open to anyone in NYC:
            tell us your own story, or find one that moves you and send us your take.
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
          <a
            href={STRANGERS_SUBMIT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-terracotta text-[#304948] text-sm font-medium rounded-full hover:bg-terracotta-dark transition-colors"
          >
            Submit Your Story
          </a>
          <a
            href="#find-a-story"
            className="inline-flex items-center justify-center px-6 py-3 border border-terracotta text-terracotta text-sm font-medium rounded-full hover:bg-terracotta/10 transition-colors"
          >
            Retell a Story
          </a>
        </div>
      </div>

      <p className="text-xs font-medium tracking-widest uppercase text-ink-light mb-4">A Few We&rsquo;ve Heard</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
        {sampleStories.map((story) => (
          <div key={story.label}>
            <p className="text-xs font-medium tracking-widest uppercase text-ink-light mb-2">{story.label}</p>
            <div className="aspect-[9/16] overflow-hidden rounded-xl bg-sand/60 border-2 border-dashed border-sand flex flex-col items-center justify-center gap-2 p-2 text-center">
              <span className="text-4xl text-ink-light/40">?</span>
              <span className="text-sm font-serif font-semibold text-ink-light/60">Coming soon</span>
            </div>
          </div>
        ))}
      </div>

      <div id="find-a-story" className="scroll-mt-24">
        <p className="text-xs font-medium tracking-widest uppercase text-ink-light mb-4">Retell a Story</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {storyBank.map((story) => {
            const hasMore = story.paragraphs.length > 1 || story.excerpt.endsWith("…");
            return (
              <div key={story.slug} className="bg-sand/30 border border-sand rounded-2xl p-6 flex flex-col gap-4">
                <span className="self-start inline-block text-xs font-medium bg-sand text-ink-light px-2.5 py-0.5 rounded-full">
                  {isPlaceholder ? "Sample story" : "Told by " + story.name}
                </span>
                <div className="space-y-2 flex-1">
                  <p className="font-serif text-base font-semibold text-ink">{story.title ?? story.name}</p>
                  {hasMore ? (
                    <details className="group/story">
                      <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <p className="text-sm text-ink-mid leading-relaxed group-open/story:hidden">
                          {story.excerpt}
                        </p>
                        <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-ink-light hover:text-ink-mid transition-colors">
                          <span className="group-open/story:hidden">Read full story</span>
                          <span className="hidden group-open/story:inline">Show less</span>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform group-open/story:rotate-180"
                            aria-hidden
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </summary>
                      <div className="mt-3 space-y-3 text-sm text-ink-mid leading-relaxed">
                        {story.paragraphs.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <p className="text-sm text-ink-mid leading-relaxed">{story.excerpt}</p>
                  )}
                </div>
                <a
                  href={STRANGERS_SUBMIT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-terracotta text-[#304948] text-sm font-medium rounded-full hover:bg-terracotta-dark transition-colors"
                >
                  Submit your video
                  <ArrowIcon />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
