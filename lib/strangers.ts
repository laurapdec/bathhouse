import fs from "node:fs";
import path from "node:path";

const STORIES_DIR = path.join(process.cwd(), "content", "strangers-in-the-park");

export type StrangerStory = {
  slug: string;
  name: string;
  ageRange: string;
  demeanor: string;
  title: string;
  paragraphs: string[];
  excerpt: string;
};

function parseStoryFile(raw: string): Omit<StrangerStory, "slug"> | null {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  let i = 0;

  if (lines[i]?.trim().toLowerCase() === "storyteller profile") i++;

  // Profile fields (Name, Age Range, General Demeanor, and any extras like
  // Gender) can be separated by blank lines, so keep consuming "Key: value"
  // lines — skipping blanks in between — until we hit the title, which is
  // the first non-blank line that doesn't look like a field.
  const fields: Record<string, string> = {};
  const fieldPattern = /^([A-Za-z][A-Za-z\s]*):\s*(.*)$/;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      i++;
      continue;
    }
    const match = line.match(fieldPattern);
    if (!match) break;
    fields[match[1].trim().toLowerCase()] = match[2].trim();
    i++;
  }

  while (i < lines.length && lines[i].trim() === "") i++;

  const title = (lines[i] ?? "").trim();
  i++;

  const paragraphs = lines
    .slice(i)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const name = fields["name"] ?? "";
  const ageRange = fields["age range"] ?? "";
  const demeanor = fields["general demeanor"] ?? "";

  if (!name || !title || paragraphs.length === 0) return null;

  const excerpt =
    paragraphs[0].length > 220 ? `${paragraphs[0].slice(0, 217).trimEnd()}…` : paragraphs[0];

  return { name, ageRange, demeanor, title, paragraphs, excerpt };
}

export function getStrangerStories(): StrangerStory[] {
  if (!fs.existsSync(STORIES_DIR)) return [];

  return fs
    .readdirSync(STORIES_DIR)
    .filter((file) => file.endsWith(".txt"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(STORIES_DIR, file), "utf-8");
      const parsed = parseStoryFile(raw);
      return parsed ? { slug: file.replace(/\.txt$/, ""), ...parsed } : null;
    })
    .filter((story): story is StrangerStory => story !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}
