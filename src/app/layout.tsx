import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Dyan — Visual REST API Builder',
  description:
    'Dyan is a self-hosted platform to visually build, test, and deploy high-performance REST APIs from any database using JS/Python logic and Rust codegen.',
  keywords: ['Dyan', 'API Builder', 'Rust', 'NestJS', 'Open Source', 'Visual'],
  metadataBase: new URL('https://dyan.live'),
  openGraph: {
    title: 'Dyan — Visual REST API Builder',
    description:
      'Visually create REST APIs, test logic in-browser, and generate blazing-fast Rust microservices. Self-hosted and open source.',
    url: 'https://dyan.live',
    siteName: 'Dyan',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Dyan Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dyan — Visual REST API Builder',
    description:
      'Build REST APIs from your DB visually, test logic with JS/Python, and deploy in Rust. Open-source and self-hosted.',
    images: ['/banner.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
