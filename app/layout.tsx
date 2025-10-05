// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="layoutWrapper">
          <Header />
          <main className="layoutMain">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
