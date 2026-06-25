import type { Metadata } from "next";
import PhotoCarousel from "@/components/PhotoCarousel";

export const metadata: Metadata = {
  title: "Archives",
  description: "Past events, workshops, and performances at Bathhouse Arts Initiative.",
};

type ArchiveEvent = {
  title: string;
  date: string;
  time: string;
  venue: string;
  type: string;
  status: "Sales Ended" | "Cancelled" | "Sold Out" | "Postponed";
  url: string;
};

type YearGroup = {
  year: number;
  events: ArchiveEvent[];
};

const statusStyle: Record<string, string> = {
  "Cancelled":  "bg-rose/15 text-rose",
  "Sold Out":   "bg-sage/15 text-sage",
  "Postponed":  "bg-terracotta/15 text-terracotta-dark",
  "Sales Ended": "bg-sand text-ink-light",
};

const SPANISH_PATTERN = /[áéíóúñüÁÉÍÓÚÑÜ]|\b(RESTOS|VIVOS|DESCARTE|POTENCIA|CREADORA|MOTORES|FISICOS|EMOCIONES|MOVIMIENTO|PRESENCIA|CUERPO|VALIENTE|ORGANICIDAD|NEUROCIENCIA|LABORATORIO|IMPROVISACI[OÓ]N|ACTOR\s+Y|DEL\s+ACTOR)\b/i;

function isSpanish(title: string) {
  return SPANISH_PATTERN.test(title);
}

function cleanTitle(title: string) {
  return title
    .replace(/^BATHHOUSE (SPECIAL CLASS|REGULAR CLASS|CLASS)\s*[-–]\s*/i, "")
    .replace(/^BATHCLASS\s*[-–]\s*/i, "")
    .replace(/^BATHHOUSE\s*[-–]\s*/i, "")
    .trim();
}

function parseDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    month: d.toLocaleDateString("en-US", { month: "long" }),
    day: d.getDate(),
    weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
  };
}

function groupByYear(events: ArchiveEvent[]): YearGroup[] {
  return events.reduce<YearGroup[]>((acc, e) => {
    const year = new Date(e.date).getFullYear();
    let group = acc.find((g) => g.year === year);
    if (!group) { group = { year, events: [] }; acc.push(group); }
    group.events.push(e);
    return acc;
  }, []).sort((a, b) => b.year - a.year);
}

export default function ArchivesPage() {
  const byYear = groupByYear(archive);
  return (
    <>
      <section className="bg-cream pt-16 pb-12 md:pt-24 md:pb-16 border-b border-sand">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-ink mb-4">Archives</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight max-w-2xl">
            What we&rsquo;ve<br />
            <span className="italic text-terracotta">made together.</span>
          </h1>
          <p className="text-ink-mid text-lg leading-relaxed max-w-xl mt-6">
            {archive.length} classes and events at Abrons Arts Center, Studios 353, and The Tank.
          </p>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-0 md:px-6">
          <PhotoCarousel />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {byYear.map((group) => (
            <details key={group.year} className="group border-b border-sand last:border-0" open>
              <summary className="py-6 flex items-center justify-between cursor-pointer list-none select-none">
                <span className="font-serif text-3xl font-bold text-ink">{group.year}</span>
                <span className="text-ink-light text-sm">{group.events.length} events</span>
              </summary>

              <div className="pb-10 space-y-2">
                {group.events.map((e, i) => {
                  const { month, day, weekday } = parseDate(e.date);
                  const badge = statusStyle[e.status] ?? statusStyle["Sales Ended"];
                  return (
                    <a
                      key={i}
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-5 p-4 rounded-xl hover:bg-sand/40 transition-colors group/row"
                    >
                      {/* Date */}
                      <div className="flex-shrink-0 w-14 text-center">
                        <p className="text-xs text-ink-light uppercase tracking-wide">{weekday}</p>
                        <p className="font-serif text-2xl font-bold text-terracotta leading-none">{day}</p>
                        <p className="text-xs text-ink-light">{month.slice(0, 3)}</p>
                      </div>

                      {/* Divider */}
                      <div className="w-px bg-sand self-stretch flex-shrink-0" />

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-base font-semibold text-ink leading-snug group-hover/row:text-terracotta transition-colors">
                          {cleanTitle(e.title)}
                        </p>
                        <p className="text-xs text-ink-light mt-0.5">{e.time} · {e.venue}</p>
                      </div>

                      {/* Badges */}
                      <div className="flex-shrink-0 flex flex-col items-end gap-1.5">
                        <span className="text-xs font-medium bg-sand text-ink-mid px-2.5 py-0.5 rounded-full">
                          {e.type}
                        </span>
                        {isSpanish(e.title) && (
                          <span className="text-xs font-medium bg-ink/10 text-ink px-2.5 py-0.5 rounded-full">
                            ES
                          </span>
                        )}
                        {e.status !== "Sales Ended" && (
                          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${badge}`}>
                            {e.status}
                          </span>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

const archive: ArchiveEvent[] = [
  { title: "BATHHOUSE SPECIAL CLASS - RESTOS VIVOS: DEL DESCARTE A LA POTENCIA CREADORA", date: "2026-05-24", time: "10:00 AM", venue: "Abrons Arts Center", type: "Special Class", status: "Cancelled", url: "https://www.eventbrite.com/e/bathhouse-special-class-restos-vivos-del-descarte-a-la-potencia-creadora-registration-1989607582839" },
  { title: "BATHHOUSE SPECIAL CLASS - TENDING TO YOURSELF: A HOLISTIC ARTIST RETREAT", date: "2026-05-23", time: "10:30 AM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-tending-to-youself-a-holistic-artist-retreat-registration-1989605627992" },
  { title: "BATHHOUSE SPECIAL CLASS: PARATHEATER AND PHYSICAL ACTION", date: "2026-05-21", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-paratheater-and-physical-action-registration-1989246111669" },
  { title: "BATHCLASS - CHARACTERIZATION: WORKING WITH ANIMALS", date: "2026-04-30", time: "7:00 PM", venue: "Abrons Arts Center", type: "Bathclass", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathclass-characterization-working-with-animals-registration-1988022382462" },
  { title: "BATHHOUSE SPECIAL CLASS - EMBODIED ACTING THROUGH SONG", date: "2026-04-23", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Cancelled", url: "https://www.eventbrite.com/e/bathhouse-special-class-embodied-acting-through-song-registration-1987621365008" },
  { title: "BATHHOUSE SPECIAL CLASS - MOTORES FISICOS DE LAS EMOCIONES", date: "2026-04-21", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-motores-fisicos-de-las-emociones-registration-1987396346973" },
  { title: "BATHHOUSE SPECIAL CLASS - FROM PARATHEATER TO CHARACTER AND ACTION", date: "2026-04-16", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sold Out", url: "https://www.eventbrite.com/e/bathhouse-special-class-from-paratheater-to-character-and-action-registration-1986988444927" },
  { title: "BATHCLASS - MOVIMIENTO Y PRESENCIA", date: "2026-04-14", time: "7:00 PM", venue: "Abrons Arts Center", type: "Bathclass", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathclass-movimiento-y-presencia-tickets-1986987198198" },
  { title: "BATHCLASS - SCRIPT & GO! VOLUME #1", date: "2026-04-09", time: "7:00 PM", venue: "Abrons Arts Center", type: "Bathclass", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathclass-script-go-volume-1-registration-1986617667923" },
  { title: "BATHHOUSE SPECIAL CLASS - CUERPO VALIENTE", date: "2026-04-07", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-cuerpo-valiente-registration-1986395766209" },
  { title: "BATHCLASS - IMPROV NIGHT: THEATER GAMES", date: "2026-04-02", time: "7:00 PM", venue: "Abrons Arts Center", type: "Bathclass", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathclass-improv-night-theater-games-registration-1986127733516" },
  { title: "BATHHOUSE SPECIAL CLASS - EMBODIED ACTING THROUGH SONG", date: "2026-03-26", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-embodied-acting-through-song-registration-1985526897399" },
  { title: "BATHHOUSE SPECIAL CLASS - WRITING FOR ACTORS", date: "2026-03-19", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-writing-for-actors-registration-1985063258643" },
  { title: "BATHHOUSE SPECIAL CLASS - MOTORES FISICOS DE LAS EMOCIONES", date: "2026-03-17", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-motores-fisicos-de-las-emociones-registration-1984772241202" },
  { title: "BATHHOUSE SPECIAL CLASS - ENSEMBLE CREATURES", date: "2026-03-12", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-ensemble-creatures-registration-1984572844802" },
  { title: "BATHCLASS - ORGANICIDAD DEL ACTOR Y NEUROCIENCIA", date: "2026-03-10", time: "7:00 PM", venue: "Abrons Arts Center", type: "Bathclass", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathclass-organicidad-del-actor-y-neurociencia-tickets-1984470332184" },
  { title: "BATHHOUSE SPECIAL CLASS - GROTOWSKI-STYLE PARATHEATRICAL TRAINING", date: "2026-03-05", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-grotowski-style-paratheatrical-training-registration-1984088731807" },
  { title: "BATHCLASS - ORGANICIDAD DEL ACTOR Y NEUROCIENCIA", date: "2026-03-03", time: "7:00 PM", venue: "Abrons Arts Center", type: "Bathclass", status: "Postponed", url: "https://www.eventbrite.com/e/bathclass-organicidad-del-actor-y-neurociencia-registration-1984088411850" },
  { title: "BATHHOUSE SPECIAL CLASS - MOVING IN AND OUT OF TUNE", date: "2026-02-26", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-moving-in-and-out-of-tune-registration-1983555970303" },
  { title: "BATHCLASS - ORGANICIDAD DEL ACTOR Y NEUROCIENCIA", date: "2026-02-24", time: "7:00 PM", venue: "Abrons Arts Center", type: "Bathclass", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathclass-organicidad-del-actor-y-neurociencia-abrons-arts-center-registration-1983554083660" },
  { title: "BATHHOUSE SPECIAL CLASS - MOVEMENT AS PHRASES", date: "2026-02-19", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-movement-as-phrases-abrons-arts-center-registration-1983010591059" },
  { title: "BATHCLASS - ORGANICIDAD DEL ACTOR Y NEUROCIENCIA", date: "2026-02-17", time: "7:00 PM", venue: "Abrons Arts Center", type: "Bathclass", status: "Postponed", url: "https://www.eventbrite.com/e/bathclass-organicidad-del-actor-y-neurociencia-abrons-arts-center-registration-1983011973193" },
  { title: "BATHHOUSE SPECIAL CLASS - IMPROVISATION LAB", date: "2026-02-12", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-improvisation-lab-abrons-arts-center-registration-1982463807615" },
  { title: "BATHHOUSE SPECIAL CLASS - LABORATORIO DE IMPROVISACIÓN", date: "2026-02-10", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-laboratorio-de-improvisacion-abrons-arts-center-registration-1982463379334" },
  { title: "BATHHOUSE REGULAR CLASS - ANCHORING THE SPACE", date: "2026-02-05", time: "7:00 PM", venue: "Abrons Arts Center", type: "Regular Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-regular-class-anchoring-the-space-abrons-arts-center-registration-1982076712804" },
  { title: "BATHHOUSE REGULAR CLASS - THEATER GAMES NIGHT", date: "2026-01-29", time: "7:00 PM", venue: "Abrons Arts Center", type: "Regular Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-regular-class-theater-games-night-abrons-arts-center-tickets-1981528688649" },
  { title: "BATHHOUSE SPECIAL CLASS - APPROACHING PROSE", date: "2026-01-22", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-approaching-prose-abrons-arts-center-tickets-1980871297374" },
  { title: "BATHHOUSE REGULAR CLASS - VERBALIZING THE SCENE", date: "2026-01-15", time: "7:00 PM", venue: "Abrons Arts Center", type: "Regular Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-regular-class-verbalizing-the-scene-abrons-arts-center-tickets-1980469599886" },
  { title: "BATHCLASS - ORGANICIDAD DEL ACTOR Y NEUROCIENCIA", date: "2026-01-13", time: "7:00 PM", venue: "Abrons Arts Center", type: "Bathclass", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathclass-organicidad-del-actor-y-neurociencia-abrons-arts-center-tickets-1980200429791" },
  { title: "BATHHOUSE SPECIAL CLASS - MOVEMENT AS PHRASES", date: "2026-01-08", time: "7:00 PM", venue: "Abrons Arts Center", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-movement-as-phrases-abrons-arts-center-tickets-1979492590625" },
  { title: "BATHHOUSE SPECIAL CLASS - INTRODUCTION TO SUZUKI ACTING METHOD", date: "2025-12-18", time: "7:00 PM", venue: "Studios 353", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-introduction-to-suzuki-acting-method-studios-353-tickets-1977835401929" },
  { title: "BATHHOUSE SPECIAL CLASS - ACT ON INSTINCT", date: "2025-12-11", time: "7:00 PM", venue: "Studios 353", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-act-on-instinct-studios-353-tickets-1977140869564" },
  { title: "BATHHOUSE REGULAR CLASS - THEATER GAMES NIGHT", date: "2025-12-04", time: "7:00 PM", venue: "Studios 353", type: "Regular Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-regular-class-theater-games-night-studios-353-tickets-1976377432102" },
  { title: "BATHHOUSE REGULAR CLASS - PANTOMIME", date: "2025-11-28", time: "7:00 PM", venue: "The Tank", type: "Regular Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-regular-class-pantomime-the-tank-tickets-1975229661088" },
  { title: "BATHHOUSE SPECIAL CLASS - MEISNER IN MUSIC", date: "2025-11-20", time: "7:00 PM", venue: "Studios 353", type: "Special Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-special-class-meisner-in-music-studios-353-tickets-1972227240768" },
  { title: "BATHHOUSE REGULAR CLASS - THEATER GAMES NIGHT", date: "2025-11-15", time: "7:00 PM", venue: "The Tank", type: "Regular Class", status: "Sales Ended", url: "https://www.eventbrite.com/e/bathhouse-regular-class-theater-games-night-the-tank-tickets-1967699244409" },
];
