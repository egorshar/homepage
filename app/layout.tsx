import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

import Analytics from '@/components/Analytics/Analytics';

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
  const cookieStore = cookies();
  const { value: theme = 'light'} = cookieStore.get('theme') || {};

  return (
    <html className={`${inter.className} ${['light', 'dark'].indexOf(theme) > -1 ? theme : ''}`}>
      <body className="dark:text-slate-200 dark:bg-slate-800">
        <div className="flex flex-col items-center justify-center mx-6 lg:mx-8 min-h-screen">
          {children}
        </div>
      </body>

      <Analytics />
    </html>
  );
}