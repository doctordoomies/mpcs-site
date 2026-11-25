export interface EntryInput {
 id?: string; type: string; title: string; slug?: string; summary: string;
 body: string; data: Record<string, unknown>; status: 'draft' | 'published'; sortOrder: number;
}

export type Seed = Omit<EntryInput, 'id'>;

let order = 0;

/** Small helper to keep seed files readable. Entries are published, in file order. */
export function e(type: string, title: string, opts: Partial<Omit<Seed, 'type' | 'title'>> = {}): Seed {
  order += 10;
  return {
    type,
    title,
    slug: opts.slug,
    summary: opts.summary ?? '',
    body: (opts.body ?? '').replace(/^\n/, '').replace(/\n {4}/g, '\n').trim(),
    data: opts.data ?? {},
    status: opts.status ?? 'published',
    sortOrder: opts.sortOrder ?? order,
  };
}

