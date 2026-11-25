import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap wrap-narrow pf-status">
        <p className="eyebrow">404</p>
        <h1>Match not found.</h1>
        <p>This page doesn’t exist, or isn’t published yet.</p>
        <Link href="/" className="btn">
          Back to MPCS
        </Link>
      </div>
    </section>
  );
}

