import type { SVGProps } from 'react';

const paths: Record<string, string> = {
  shield: 'M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4-6.3 6.3Z',
  bolt: 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z',
  trophy: 'M7 3h10v2h4v3a5 5 0 0 1-4.6 5A5 5 0 0 1 13 15.9V18h3v3H8v-3h3v-2.1A5 5 0 0 1 7.6 13 5 5 0 0 1 3 8V5h4V3Zm0 4H5v1a3 3 0 0 0 2 2.8V7Zm12 0h-2v3.8A3 3 0 0 0 19 8V7Z',
  users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM1 20c0-3.3 3.6-6 8-6s8 2.7 8 6v1H1v-1Zm17.5 1v-1c0-1.9-.8-3.6-2.1-4.9 3.6.2 6.6 2.4 6.6 4.9v1h-4.5Z',
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-3a15 15 0 0 0-1.4-3.8A8 8 0 0 1 18.9 8ZM12 4.1c.8 1.1 1.5 2.4 1.9 3.9h-3.8c.4-1.5 1.1-2.8 1.9-3.9ZM4.3 14a8 8 0 0 1 0-4h3.4a16 16 0 0 0 0 4H4.3Zm.8 2h3c.3 1.4.8 2.7 1.4 3.8A8 8 0 0 1 5.1 16Zm3-8h-3a8 8 0 0 1 4.4-3.8C8.9 5.3 8.4 6.6 8.1 8ZM12 19.9c-.8-1.1-1.5-2.4-1.9-3.9h3.8c-.4 1.5-1.1 2.8-1.9 3.9Zm2.3-5.9H9.7a14 14 0 0 1 0-4h4.6a14 14 0 0 1 0 4Zm.2 5.8c.6-1.1 1.1-2.4 1.4-3.8h3a8 8 0 0 1-4.4 3.8Zm1.8-5.8a16 16 0 0 0 0-4h3.4a8 8 0 0 1 0 4h-3.4Z',
  chart: 'M3 3h2v16h16v2H3V3Zm4 10h3v4H7v-4Zm5-5h3v9h-3V8Zm5-3h3v12h-3V5Z',
  sword: 'M21 3v4.5L11.4 17l1.4 1.4-1.4 1.4-2.1-2.1-2.8 2.8-1.4-1.4 2.8-2.8-2.1-2.1 1.4-1.4 1.4 1.4L18.5 3H21Z',
  star: 'm12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7.1L12 17.3 5.8 21l1.6-7.1L2 9.2l7.1-.6L12 2Z',
  calendar: 'M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2Zm12 8H5v9h14v-9Z',
  gift: 'M20 7h-2.2A3 3 0 0 0 12 3.8 3 3 0 0 0 6.2 7H4a1 1 0 0 0-1 1v4h1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8h1V8a1 1 0 0 0-1-1Zm-5-2a1 1 0 1 1 0 2h-2a2 2 0 0 1 2-2ZM9 5a2 2 0 0 1 2 2H9a1 1 0 1 1 0-2Zm2 14H6v-7h5v7Zm0-9H5V9h6v1Zm7 9h-5v-7h5v7Zm1-9h-6V9h6v1Z',
  video: 'M3 5h13a1 1 0 0 1 1 1v3.5l4-2.5v10l-4-2.5V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z',
  check: 'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z',
  mail: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4 7.3V17h16V7.3l-8 4.9Zm0-2.4L19 6H5l7 3.8Z',
  arrow: 'M13.2 5.3 19.9 12l-6.7 6.7-1.4-1.4 4.3-4.3H4v-2h12.1l-4.3-4.3 1.4-1.4Z',
  lock: 'M7 10V7a5 5 0 0 1 10 0v3h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1Zm2 0h6V7a3 3 0 0 0-6 0v3Z',
  clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10.6 3.2 3.2-1.4 1.4L11 13.4V6h2v6.6Z',
};

export type IconName = keyof typeof paths;

export function Icon({ name, size = 24, ...rest }: { name: string; size?: number } & SVGProps<SVGSVGElement>) {
  const d = paths[name] ?? paths.star;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
      <path d={d} />
    </svg>
  );
}

