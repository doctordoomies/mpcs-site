import type { Metadata, MetadataRoute } from 'next';
import { currentSite } from './site';
import { listPublished } from './content';
const env = { siteUrl: 'https://mpcs.gg' };

/** Root metadata for an app's layout. */
export function rootMetadata(opts: { titleSuffix?: string; keywords?: string[] } = {}): Metadata {
  const site = currentSite();
  const suffix = opts.titleSuffix ?? `${site.name} — ${site.tagline}`;
  return {
    metadataBase: new URL(env.siteUrl),
    title: { default: suffix, template: `%s · ${site.name}` },
    description: site.description,
    keywords: opts.keywords,
    applicationName: site.name,
    alternates: { canonical: '/' },
    openGraph: { type: 'website', siteName: site.name, title: suffix, description: site.description, url: '/', locale: 'en_GB' },
    twitter: { card: 'summary_large_image', title: suffix, description: site.description },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false },
  };
}

/** Per-page metadata with canonical URL and social cards. */
export function pageMetadata(opts: { title: string; description?: string; path: string; noindex?: boolean }): Metadata {
  const site = currentSite();
  const description = opts.description || site.description;
  return {
    title: opts.title,
    description,
    alternates: { canonical: opts.path },
    openGraph: { title: `${opts.title} · ${site.name}`, description, url: opts.path, siteName: site.name, type: 'website' },
    twitter: { card: 'summary_large_image', title: `${opts.title} · ${site.name}`, description },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function robots(): MetadataRoute.Robots {
  // Keep Preview deployments out of search engines.
  const isProdDeploy = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production';
  return {
    rules: isProdDeploy ? [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api/'] }] : [{ userAgent: '*', disallow: '/' }],
    sitemap: `${env.siteUrl}/sitemap.xml`,
  };
}

/** Static paths plus every published entry that has its own page. */
export async function sitemap(staticPaths: string[]): Promise<MetadataRoute.Sitemap> {
  const site = currentSite();
  const now = new Date();
  const out: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${env.siteUrl}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '/' ? 1 : 0.7,
  }));
  for (const def of [{ type: 'news', publicPath: '/news' }]) {
    try {
      for (const e of await listPublished(site, def.type)) {
        out.push({ url: `${env.siteUrl}${def.publicPath}/${e.slug}`, lastModified: e.updatedAt, changeFrequency: 'monthly', priority: 0.6 });
      }
    } catch (err) {
      console.error('[sitemap] content unavailable', err);
    }
  }
  return out;
}

export function organizationJsonLd(): Record<string, unknown> {
  const site = currentSite();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    alternateName: site.tagline,
    url: env.siteUrl,
    logo: `${env.siteUrl}/brand/avatar.svg`,
    description: site.description,
  };
}

