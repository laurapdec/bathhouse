export type Event = {
  id: string;
  name: string;
  teacher: string;
  date: string;
  time: string;
  location: string;
  level: string;
  url: string;
};

type EBEvent = {
  id: string;
  name: { text: string };
  start: { local: string };
  end: { local: string };
  url: string;
  venue?: { name?: string } | null;
  is_free: boolean;
  category_id?: string | null;
};

function formatTime(local: string) {
  const d = new Date(local);
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function toEvent(e: EBEvent): Event {
  return {
    id: e.id,
    name: e.name.text,
    teacher: "",
    date: e.start.local.slice(0, 10),
    time: `${formatTime(e.start.local)} – ${formatTime(e.end.local)}`,
    location: e.venue?.name ?? "Bathhouse Arts",
    level: "All levels",
    url: e.url,
  };
}

export async function getEvents(): Promise<Event[]> {
  const token = process.env.EVENTBRITE_TOKEN;
  if (!token) return [];

  const res = await fetch(
    "https://www.eventbriteapi.com/v3/organizers/114572978801/events/?status=live&order_by=start_asc&expand=venue",
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) return [];
  const data = await res.json();
  return (data.events as EBEvent[]).map(toEvent);
}
