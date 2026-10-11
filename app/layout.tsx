import './global.css';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

import Analytics from '@/components/Analytics/Analytics';
import {
  WOW_SCRIPT_HTML,
  getPreviewImageMetadata,
  getRequestPath,
  getVisitPixelUrl,
} from '@/utils/metadata';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  const path = getRequestPath();

  return {
    title: 'Egor Sharapov',
    description: 'Frontend developer',
    ...(path ? getPreviewImageMetadata(path) : {}),
  };
}

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode,
}) {
  const cookieStore = cookies();
  const { value: theme = 'light' } = cookieStore.get('theme') || {};
  const path = getRequestPath();

  return (
    <html className={`${inter.className} ${['light', 'dark'].indexOf(theme) > -1 ? theme : ''}`}>
      <body className="dark:text-slate-200 dark:bg-slate-800">
        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
        <div hidden dangerouslySetInnerHTML={{ __html: WOW_SCRIPT_HTML }} />
        {path && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={getVisitPixelUrl(path)} alt="" width="1" height="1" />
          </noscript>
        )}
      </body>
      <Analytics />
    </html>
  );
}