// app/components/Footer.tsx
export const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} The QExAI — AI Assurance Insights & Tools</p>
    <div className="footerLinks">
      <a href="https://github.com/idofanish" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/idofanish" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="/rss.xml">RSS</a>
    </div>
  </footer>
);
