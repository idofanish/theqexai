// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <section className="heroSection">
      <h2 className="heroTitle">
        Building Confidence in AI Systems
      </h2>
      <p className="heroDesc">
        Exploring Quality, Testing, and Assurance in the Age of AI.
      </p>
      <Link href="/blog" className="heroCTA">
        Read Latest Insights →
      </Link>
    </section>
  );
}
