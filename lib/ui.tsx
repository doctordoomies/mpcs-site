import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { site } from './site';

export { NavCloser, NavToggle, RevealObserver } from './reveal';
export { Icon } from './icons';

/** Renders staff-authored markdown. Raw HTML is not allowed. */
export function Markdown({ children, className = 'prose' }: { children: string; className?: string }) {
  if (!children?.trim()) return null;
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children: c }) => {
            const external = href?.startsWith('http');
            return (
              <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                {c}
              </a>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}


export function EmailContact({ sponsorship = false }: { sponsorship?: boolean }) {
 const email = site.settingsDefaults.contact_email;
 const subject = sponsorship ? 'MPCS Sponsorship Inquiry' : 'MPCS League Inquiry';
 return <div><p>Send your name, organisation and proposal to league operations.</p>
 <a className="btn" href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}>{sponsorship ? 'Email sponsorship proposal' : 'Email league operations'}</a>
 <p style={{ marginTop: '1rem', overflowWrap: 'anywhere' }}><a href={`mailto:${email}`}>{email}</a></p></div>;
}
