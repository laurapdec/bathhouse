import type { Metadata } from "next";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What students and participants say about Bathhouse Arts Initiative.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-cream pt-16 pb-12 md:pt-24 md:pb-16 border-b border-sand animate-curtain-rise">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-ink mb-4">Testimonials</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight max-w-2xl">
            In their<br />
            <span className="italic text-terracotta">own words.</span>
          </h1>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="break-inside-avoid bg-sand/30 border border-sand rounded-2xl p-7 space-y-4"
            >
              <div className="font-serif text-lg text-ink leading-relaxed space-y-3">
                {t.quote.split("\n\n").map((paragraph, i, arr) => (
                  <p key={i}>
                    {i === 0 && <>&ldquo;</>}
                    {paragraph}
                    {i === arr.length - 1 && <>&rdquo;</>}
                  </p>
                ))}
              </div>
              <footer>
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-xs text-ink-light mt-0.5">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}

const testimonials = [
  {
    name: "Jon-Mykul Bowen",
    role: "Theater artist, clown & actor",
    quote:
      "Tonight I taught the Meisner in Music Level One workshop. It was so reaffirming to see people embrace what I was teaching. Everyone was so kind, receptive, and willing to try. It was incredibly rewarding to share what I know with people who genuinely appreciated it. It made me feel important.\n\nThey'll take care of you — that's the thing. I felt so supported and welcomed into the space. It's much scarier in your head than it is in reality.\n\nSo I would say: just do it.",
  },
  {
    name: "Luna Vintner",
    role: "Multidisciplinary artist",
    quote:
      "It's wonderful to have a space like this. You're not being graded or working toward a certification with a long list of rules.\n\nInstead, you get to experiment. It's a place where you can ask yourself: Does the way I'm teaching make sense? Does it resonate with different groups of people?\n\nEvery class is different because different people bring different perspectives.\n\nIt's a great opportunity to explore what you're passionate about, share it with others, and hope they take something meaningful from it.",
  },
  {
    name: "James Wagner",
    role: "Movement teacher, actor, writer & director",
    quote:
      "This experience was great. Bruno is an amazing marketer and brought together a wonderful group of people. It was a full class in a beautiful space — much larger than I expected.\n\nWe had room to move, and the participants were enthusiastic and grateful to be there, many of them encountering something entirely new.\n\nYou all genuinely take care of us. You're doing a great job spreading the word, and for me it was a wonderful opportunity to meet people I might never have encountered otherwise.",
  },
  {
    name: "Mikayla Czizik",
    role: "Actor, Atlantic Acting School & NYU Tisch",
    quote:
      "I'm incredibly grateful for this opportunity.\n\nThank you, Bruno. This was truly amazing, and I'm honored to have been a part of it.\n\nI've done some teaching before while working at a sleepaway camp, but this was my first time teaching a real class.\n\nIt was incredibly reaffirming to watch every student grow. The transformation was dramatic.\n\nI think everyone left feeling really good about themselves, and that's the goal.",
  },
  {
    name: "Phillip C. Pettiford",
    role: "Actor, dancer & mover",
    quote:
      "I'm feeling really good. It was incredibly rewarding to lead contact improvisation in this space with people who absorbed everything like sponges.\n\nIf you have something you're passionate about, bring it.\n\nThe community here is receptive, willing to experiment, willing to get a little messy and playful.\n\nWhatever you have to offer will add value to the space.",
  },
  {
    name: "Jacob Anderson",
    role: "Teacher, actor & director",
    quote:
      "I'm excited that opportunities like this are becoming more available. Some of the most powerful movements in theater education and artistic creation began in spaces exactly like this, and those opportunities haven't been as common in recent years.\n\nBeing here was incredibly rewarding, both practically and creatively. It was a wonderful experience.",
  },
  {
    name: "Maks Turner",
    role: "Clown & physical theater maker",
    quote:
      "This experience was fantastic. It was so much fun.\n\nThe environment that's been created here is incredibly supportive and empowering. It encourages people to take ownership of their own training and creative growth.",
  },
  {
    name: "Catherine Núñez",
    role: "Actress, teaching artist & producer",
    quote:
      "I love teaching, and teaching at Bathhouse was especially rewarding.\n\nIt was wonderful to see members of the artistic community — some with experience and some exploring this work for the first time — approach the workshop with openness, curiosity, and a willingness to play.\n\nThe energy they brought to the two-hour workshop was inspiring.\n\nAs a teacher, I found the experience deeply rewarding and enriching.\n\nYo creo que lo más importante es crear estos espacios que podamos autogestionar y ofrecer a una comunidad que está sedienta de recursos, oportunidades y lugares donde reunirse para crear arte.",
  },
  {
    name: "Rachel Pacelli",
    role: "Actor, writer & producer",
    quote:
      "This was incredible.\n\nI knew it was going to be good — I had a good feeling — but it exceeded every expectation I had.\n\nIt was so inspiring to watch people put themselves out there, take risks, and grow as artists.\n\nSeeing writers step out of their heads, reconnect with their bodies, and create from that place of freedom was incredibly moving.",
  },
  {
    name: "Laura Petit",
    role: "Actriz, profesora e investigadora en artes escénicas",
    quote:
      "Esta clase estuvo fabulosa. Me encantó la energía de todos los participantes.\n\nAdemás, después de diez años viviendo en Nueva York, hablando, pensando y trabajando en inglés, dar una clase en español fue una experiencia maravillosa.\n\nFue muy emocionante sentir la energía de todos los participantes.\n\nTe vas a sentir muy cómodo. Es un espacio seguro, un espacio para experimentar y explorar.\n\nTodos son bienvenidos.",
  },
  {
    name: "Susana Yasan",
    role: "Experta en cuerpo, bioenergética y acto creador",
    quote:
      "Desde mi pasión por la vida, me parece profundamente hermoso crear espacios donde artistas y personas de distintas profesiones vinculadas a la creación y la educación puedan reunirse para construir algo nuevo.\n\nLo que ocurrió hoy fue muy especial.",
  },
  {
    name: "Daniel Diaza",
    role: "Actor, director y profesor de artes escénicas",
    quote:
      "Fue una experiencia maravillosa.\n\nTuvimos un grupo grande, diverso y generoso, con participantes provenientes de muchos países de Latinoamérica.\n\nExploramos, jugamos, aprendimos y nos divertimos.\n\nSi tienes algo que compartir con los demás, este es el lugar para hacerlo. El conocimiento no debe quedarse guardado. Cuanto más lo compartimos, más crece.\n\nBathhouse es un lugar para crecer, conectar y construir una comunidad que aprende, se apoya y se abraza.",
  },
];
