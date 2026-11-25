import { organizationJsonLd } from '@/lib/seo';
import { getSettings, setting } from '@/lib/content';
import { currentSite } from '@/lib/site';
import { JsonLd, NavCloser, NavToggle, RevealObserver } from '@/lib/ui';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { NavLinks } from '../_components/nav-links';


const NAV = [
  { href: '/format', label: 'Format' },
  { href: '/seasons', label: 'Seasons' },
  { href: '/teams', label: 'Teams' },
  { href: '/qualifiers', label: 'Qualifiers' },
  { href: '/rules', label: 'Rules' },
  { href: '/hall-of-fame', label: 'Hall of Fame' },
  { href: '/about', label: 'About' },
];

export default async function SiteLayout({ children }: { children: ReactNode }) {
  const site = currentSite();
  const email = setting(await getSettings(site), 'contact_email');
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link href="/" className="logo" aria-label="MPCS home">
            <img src="/brand/symbol-dark.svg" alt="" width={34} height={34} />
            <img src="/brand/wordmark-dark.svg" alt="MPCS — Minecraft PvP Championship Series" width={104} height={32} className="logo-word" />
          </Link>
          <nav id="site-nav" className="site-nav" aria-label="Main">
            <NavLinks items={NAV} />
            <Link href="/teams#register" className="btn btn-sm">
              Participate
            </Link>
          </nav>
          <NavToggle />
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <img src="/brand/primary-dark.svg" alt="MPCS" width={150} height={133} />
            <p>The Minecraft PvP Championship Series. Season 1 in development.</p>
          </div>
          <div>
            <h2 className="footer-h">League</h2>
            <ul>
              <li><Link href="/format">Competition format</Link></li>
              <li><Link href="/seasons">Seasons</Link></li>
              <li><Link href="/rules">Rulebook</Link></li>
              <li><Link href="/hall-of-fame">Hall of Fame</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="footer-h">Compete</h2>
            <ul>
              <li><Link href="/teams">Teams</Link></li>
              <li><Link href="/qualifiers">Qualifiers</Link></li>
              <li><Link href="/teams#register">Player &amp; team interest</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="footer-h">Organisation</h2>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/news">Announcements</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              {email && <li><a href={`mailto:${email}`}>{email}</a></li>}
            </ul>
          </div>
        </div>
        <div className="wrap footer-base">
          <span>© {new Date().getFullYear()} Minecraft PvP Championship Series · Not affiliated with Mojang or Microsoft.</span>
          <Link href="/privacy">Privacy</Link>
        </div>
      </footer>
      <JsonLd data={organizationJsonLd()} />
      <RevealObserver />
      <NavCloser />
    </>
  );
}

