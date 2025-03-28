import './global.css';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

import Analytics from '@/components/Analytics/Analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Egor Sharapov',
  description: 'Frontend developer',
};

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode,
}) {
  const cookieStore = cookies();
  const { value: theme = 'light' } = cookieStore.get('theme') || {};

  return (
    <html className={`${inter.className} ${['light', 'dark'].indexOf(theme) > -1 ? theme : ''}`}>
      <body className="dark:text-slate-200 dark:bg-slate-800">
        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
      </body>
      <Analytics />
    </html>
  );
}