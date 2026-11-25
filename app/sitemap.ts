export const dynamic = 'force-static';
import { sitemap } from '@/lib/seo';


export default function Sitemap() {
  return sitemap(['/', '/about', '/format', '/seasons', '/teams', '/qualifiers', '/rules', '/hall-of-fame', '/partners', '/news', '/contact', '/privacy']);
}

