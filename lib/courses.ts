export const longFormCourses = [
  {
    id: "bufon",
    title: "Despertando a tu Bufón Escénico",
    teacher: "Daniel Diaza",
    type: "Curso de Larga Duración (Español)",
    schedule: "Lunes y Miércoles, 6:30–9:30 PM · Jul 13 – Ago 10 · 9 sesiones · Máx. 12 · 16+",
    body: "Un laboratorio escénico centrado en el cuerpo como motor de la comedia y la presencia auténtica del intérprete. A través del juego, el entrenamiento físico y la exploración creativa, los participantes desarrollarán un lenguaje propio que conecte directamente con el público.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSclSKG_EQ_afk983VHxChM5EW75gx8DKTjoW7duyeOWTDYCBw/viewform",
    applicationDeadline: "2026-06-30",
    days: [0, 2],
    startDate: "2026-07-13",
    endDate: "2026-08-10",
    color: "bg-rose/15 text-rose hover:bg-rose/25",
    dot: "bg-rose",
    shortName: "Bufón Escénico",
    abbr: "BE",
  },
  {
    id: "gesture",
    title: "Anatomy of a Gesture",
    teacher: "Paulina Zuleta",
    type: "Long-Form Course (English)",
    schedule: "Thursdays, 6:30–9:30 PM · Jul 16 – Aug 6 · 4 sessions · Max 10 · 16+",
    body: "A workshop in bodily exploration and stage creation that transforms everyday actions into dramatic and poetic material for dance and theater. Through small rituals, movement games, and exercises observing the body in daily life, discover the expressive power in simple gestures.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScD0T9rhrqntfPPD2ESFRumqP8N5bde9HtgaZ_Q6VRQALdX6g/viewform",
    applicationDeadline: "2026-06-30",
    days: [3],
    startDate: "2026-07-16",
    endDate: "2026-08-06",
    color: "bg-sage/15 text-sage hover:bg-sage/25",
    dot: "bg-sage",
    shortName: "Anatomy of a Gesture",
    abbr: "AG",
  },
  {
    id: "rise",
    title: "Rise Rooted",
    teacher: "Tessie Herrasti",
    type: "Bathhouse x BMHF (English)",
    schedule: "Fridays, 6:30–9:30 PM · Jul 10 – Aug 21 · 7 sessions · Max 12 · 16+",
    body: "A guided journey into self-awareness, emotional wellbeing, and personal growth. Through meditation, social-emotional arts, somatic practices, and reflective exercises, develop tools for healing, resilience, self-worth, and deeper connection.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeG_t3GSS6okS-omDHwBVBxj0yGSCdNhU4-XSakx0xhx0p_Nw/viewform",
    applicationDeadline: "2026-06-30",
    days: [4],
    startDate: "2026-07-10",
    endDate: "2026-08-21",
    color: "bg-terracotta/15 text-terracotta-dark hover:bg-terracotta/25",
    dot: "bg-terracotta",
    shortName: "Rise Rooted",
    abbr: "RR",
  },
];

export type Course = (typeof longFormCourses)[number];

export function buildCalendarWeeks(year?: number, month?: number) {
  // Default: build for a fixed range. If year/month given, build for that month.
  let start: Date;
  let end: Date;

  if (year != null && month != null) {
    // month is 0-indexed
    const firstDay = new Date(year, month, 1, 12);
    const lastDay = new Date(year, month + 1, 0, 12);
    // Pad to Monday start
    const startDow = firstDay.getDay();
    const mondayOffset = startDow === 0 ? -6 : 1 - startDow;
    start = new Date(firstDay);
    start.setDate(start.getDate() + mondayOffset);
    // Pad to Sunday end
    const endDow = lastDay.getDay();
    const sundayOffset = endDow === 0 ? 0 : 7 - endDow;
    end = new Date(lastDay);
    end.setDate(end.getDate() + sundayOffset);
  } else {
    start = new Date("2026-07-06T12:00:00");
    end = new Date("2026-08-23T12:00:00");
  }

  const weeks: ({ date: Date; courses: Course[]; inMonth: boolean } | null)[][] = [];
  const cursor = new Date(start);

  while (cursor <= end) {
    const week: ({ date: Date; courses: Course[]; inMonth: boolean } | null)[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(cursor);
      const jsDay = date.getDay();
      const dayOfWeek = jsDay === 0 ? 6 : jsDay - 1;
      const matching = longFormCourses.filter((c) => {
        const s = new Date(c.startDate + "T00:00:00");
        const e = new Date(c.endDate + "T23:59:59");
        return c.days.includes(dayOfWeek) && date >= s && date <= e;
      });
      const inMonth = month != null ? date.getMonth() === month : true;
      week.push({ date, courses: matching, inMonth });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}
