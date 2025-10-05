// app/components/Header.tsx
import Link from 'next/link';

export const Header = () => (
  <header className="header">
    <h1 className="headerTitle">The QExAI</h1>
    <nav>
      <ul className="headerNav">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/tools">Tools</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  </header>
);
