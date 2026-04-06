import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Kavya Vadlamudi | Full Stack Developer',
  description: 'Building scalable enterprise systems for banking, healthcare, and insurance. 5+ years of experience in microservices, cloud architecture, and distributed systems.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'Java', 'Spring Boot', 'React', 'AWS', 'Microservices'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <Header />
        <main style={{ paddingTop: '72px', minHeight: 'calc(100vh - 200px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
