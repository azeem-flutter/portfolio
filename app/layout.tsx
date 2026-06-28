import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammad Azeem — Software Engineer & Automation Developer',
  description:
    'Building intelligent backends, seamless mobile experiences, and autonomous workflows. Portfolio of Muhammad Azeem — Flutter, FastAPI, n8n & AI automation.',
  keywords: [
    'Muhammad Azeem',
    'Software Engineer',
    'Automation Developer',
    'Flutter Developer',
    'FastAPI',
    'n8n Automation',
    'AI Workflows',
  ],
  authors: [{ name: 'Muhammad Azeem' }],
  openGraph: {
    title: 'Muhammad Azeem — Software Engineer & Automation Developer',
    description:
      'Building intelligent backends, seamless mobile experiences, and autonomous workflows.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-base text-ink-primary antialiased">
        {children}
      </body>
    </html>
  );
}
