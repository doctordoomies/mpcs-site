import { mpcsSeed } from './data';
import { site } from './site';
import type { Seed } from './content-types';
export type Entry = Omit<Seed, 'slug'> & { id: string; slug: string; publishedAt: Date | null; updatedAt: Date };
const entries: Entry[] = mpcsSeed.map((entry, index) => ({
 ...entry, id: String(index),
 slug: entry.slug || entry.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
 publishedAt: null, updatedAt: new Date('2026-11-25T00:00:00Z'),
}));
export async function listPublished(_site: typeof site, type: string, limit = 200): Promise<Entry[]> {
 return entries.filter(entry => entry.type === type && entry.status === 'published')
  .sort((a, b) => a.sortOrder - b.sortOrder).slice(0, limit);
}
export async function getPublished(_site: typeof site, type: string, slug: string) {
 return entries.find(entry => entry.type === type && entry.slug === slug && entry.status === 'published');
}
type Settings = Record<string, string | boolean>;
export async function getSettings(_site: typeof site): Promise<Settings> { return site.settingsDefaults; }
export function setting(settings: Settings, key: string): string {
 const value = settings[key]; return typeof value === 'string' ? value : '';
}
export function flag(settings: Settings, key: string): boolean { return settings[key] === true; }
export function str(entry: Pick<Entry, 'data'>, key: string, fallback = ''): string {
  const v = entry.data?.[key];
  return typeof v === 'string' ? v : fallback;
}

export function list(entry: Pick<Entry, 'data'>, key: string): string[] {
  const v = entry.data?.[key];
  return Array.isArray(v) ? v.map(String) : [];
}

export function bool(entry: Pick<Entry, 'data'>, key: string): boolean {
  return entry.data?.[key] === true;
}

