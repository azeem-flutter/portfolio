import type { Metadata } from 'next';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Azeem — Software Engineer & Automation Developer',
  description:
    'Portfolio of Muhammad Azeem — software engineer focused on polished mobile apps, backend APIs, and AI automation with Flutter, FastAPI, and n8n.',
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
      'Polished mobile apps, resilient backend APIs, and AI automation built with Flutter, FastAPI, and n8n.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-base text-ink-primary antialiased">
        {children}
      </body>
    </html>
  );
}
