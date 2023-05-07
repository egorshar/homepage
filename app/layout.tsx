import React from 'react';
import { Inter } from 'next/font/google';

import Analytics from '../components/Analytics/Analytics';

import './global.css';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Egor Sharapov\'s Homepage',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html className={inter.className}>
      <body>
        <div className="flex flex-col items-center justify-center mx-6 lg:mx-8">
          {children}
        </div>
      </body>

      <Analytics />
    </html>
  );
}