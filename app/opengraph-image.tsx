export const dynamic = 'force-static';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'MPCS — Minecraft PvP Championship Series';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/brand/horizontal-dark.svg'));
  const src = `data:image/svg+xml;base64,${logo.toString('base64')}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 36,
          backgroundColor: '#101B20',
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(53,221,242,0.35), transparent 60%)',
        }}
      >
        <img src={src} width={840} height={255} alt="" />
        <div style={{ display: 'flex', fontSize: 30, letterSpacing: 10, color: '#35DDF2', fontWeight: 700 }}>SEASON 1 · COMING SOON</div>
      </div>
    ),
    size,
  );
}

