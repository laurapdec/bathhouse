export const STRANGERS_SUBMIT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfg92ts7Y_9KIPhUw5RAcSpaALOQr9_pu1XhOuinCqbovVQpQ/viewform?usp=sharing";

const sampleStories = [
  { label: "Story 1" },
  { label: "Story 2" },
  { label: "Story 3" },
];

// Sample entries only swap in real transcribed submissions (with a fictitious
// name standing in for the real person) as they come in.
const storyBank = [
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
            Find a Story
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
        <p className="text-xs font-medium tracking-widest uppercase text-ink-light mb-4">Find a Story</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {storyBank.map((story) => (
            <div key={story.name} className="bg-sand/30 border border-sand rounded-2xl p-6 flex flex-col gap-4">
              <span className="self-start inline-block text-xs font-medium bg-sand text-ink-light px-2.5 py-0.5 rounded-full">
                Sample story
              </span>
              <div className="space-y-2 flex-1">
                <p className="font-serif text-base font-semibold text-ink">{story.name}</p>
                <p className="text-sm text-ink-mid leading-relaxed">{story.excerpt}</p>
              </div>
              <a
                href={STRANGERS_SUBMIT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors"
              >
                Submit your video →
              </a>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
