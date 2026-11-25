import { rootMetadata } from '@/lib/seo';
import type { Viewport } from 'next';
import { Inter, Oxanium } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const display = Oxanium({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata = rootMetadata({
  titleSuffix: 'MPCS — Minecraft PvP Championship Series',
  keywords: ['MPCS', 'Minecraft PvP Championship Series', 'Minecraft esports', 'Minecraft PvP league', 'Minecraft tournament', 'competitive Minecraft'],
});

export const viewport: Viewport = { themeColor: '#101B20', colorScheme: 'dark' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}

