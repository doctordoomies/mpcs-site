import type { Entry } from '@/lib/content';
import { str } from '@/lib/content';
import { Markdown } from '@/lib/ui';
import Link from 'next/link';
import type { ReactNode } from 'react';

export function SectionHead({ eyebrow, title, intro, center }: { eyebrow: string; title: ReactNode; intro?: ReactNode; center?: boolean }) {
  return (
    <header className={`section-head${center ? ' is-center' : ''}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="lede">{intro}</p>}
    </header>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <img src="/brand/symbol-dark.svg" alt="" className="page-hero-crest" width={420} height={420} aria-hidden />
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {intro && <p className="lede">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

/** Broadcast-style series bar from the brand board — illustrative, never a real result. */
export function Scoreboard({ kits }: { kits: Entry[] }) {
  return (
    <figure className="scoreboard" aria-label="Broadcast graphics preview (illustrative)">
      <figcaption>Broadcast preview · illustrative</figcaption>
      <div className="scoreboard-bar">
        <span className="sb-team">Team A</span>
        <span className="sb-vs">
          <span className="sb-bo">Best of 7</span>
          <span className="sb-dash">—</span>
        </span>
        <span className="sb-team sb-right">Team B</span>
        <span className="sb-domain">MPCS.GG</span>
      </div>
      <ol className="sb-games" aria-label="Series games">
        {Array.from({ length: 7 }, (_, i) => (
          <li key={i}>
            <span>G{i + 1}</span>
            <strong>{str(kits[i] ?? ({ data: {} } as Entry), 'code', '—')}</strong>
          </li>
        ))}
      </ol>
    </figure>
  );
}

/** The pick/ban order as a sequence of slots. */
export function DraftDiagram() {
  const steps = [
    { k: 'Ban', who: 'A', note: 'Team A bans' },
    { k: 'Ban', who: 'B', note: 'Team B bans' },
    { k: 'G1', who: 'A', note: 'A picks' },
    { k: 'G2', who: 'B', note: 'B picks' },
    { k: 'G3', who: 'A', note: 'A picks' },
    { k: 'G4', who: 'B', note: 'B picks' },
    { k: 'G5', who: 'A', note: 'A picks' },
    { k: 'G6', who: '★', note: 'Leader’s ban' },
    { k: 'G7', who: '★', note: 'Last ban' },
  ];
  return (
    <ol className="draft" aria-label="Pick/ban order">
      {steps.map((s, i) => (
        <li key={i} className={`draft-step ${s.k === 'Ban' ? 'is-ban' : s.who === '★' ? 'is-decider' : `is-${s.who.toLowerCase()}`}`} data-reveal>
          <span className="draft-k">{s.k}</span>
          <span className="draft-who">{s.who}</span>
          <span className="draft-note">{s.note}</span>
        </li>
      ))}
    </ol>
  );
}

export function KitCard({ kit, index }: { kit: Entry; index: number }) {
  return (
    <li className="kit" data-reveal style={{ transitionDelay: `${index * 40}ms` }}>
      <span className="kit-code">{str(kit, 'code')}</span>
      <h3>{kit.title}</h3>
      <p>{kit.summary}</p>
      {str(kit, 'style') && <span className="kit-style">{str(kit, 'style')}</span>}
    </li>
  );
}

export function NewsCard({ entry }: { entry: Entry }) {
  return (
    <article className="news-card" data-reveal>
      <p className="news-meta">
        <span>{str(entry, 'category', 'Announcement')}</span>
        {entry.publishedAt && <time dateTime={entry.publishedAt.toISOString()}>{fmt(entry.publishedAt)}</time>}
      </p>
      <h3>
        <Link href={`/news/${entry.slug}`}>{entry.title}</Link>
      </h3>
      <p>{entry.summary}</p>
    </article>
  );
}

export function fmt(d: Date) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function Sections({ entries, numbered = false }: { entries: Entry[]; numbered?: boolean }) {
  return (
    <div className="sections">
      {entries.map((s, i) => (
        <article key={s.id} className="sec" data-reveal>
          <div className="sec-label">
            {numbered && <span className="sec-n">{String(i + 1).padStart(2, '0')}</span>}
            {s.summary && <p className="eyebrow">{s.summary}</p>}
          </div>
          <div>
            <h2>{s.title}</h2>
            <Markdown>{s.body}</Markdown>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FaqList({ items }: { items: Entry[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.id} className="faq-item" data-reveal>
          <summary>{f.title}</summary>
          <Markdown>{f.body}</Markdown>
        </details>
      ))}
    </div>
  );
}

export function NotifyBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="notify-band" id="notify" aria-labelledby="notify-title">
      <div className="wrap notify-inner" data-reveal>
        <div>
          <p className="eyebrow">League updates</p>
          <h2 id="notify-title">{title}</h2>
          <p>{text}</p>
        </div>
        <Link href="/news" className="btn">Read announcements</Link>
      </div>
    </section>
  );
}

export function forPage(sections: Entry[], page: string) {
  return sections.filter((s) => str(s, 'page') === page);
}

