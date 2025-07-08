import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Dyan — Visual REST API Builder',
  description: 'Self-hosted visual REST API builder with Rust codegen.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
