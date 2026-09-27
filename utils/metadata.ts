import type { Metadata } from 'next';

const SITE_URL = 'https://egor.sh';
const OG_IMAGE_BASE = 'https://img.getwowlink.com/b075rjfvvn.png';

// Per-page Open Graph / Twitter preview image, keyed by the page's absolute URL
export const getPageMetadata = (path: string): Metadata => {
  const pageUrl = SITE_URL + path;
  const image = `${OG_IMAGE_BASE}?url=${encodeURIComponent(pageUrl)}`;

  return {
    openGraph: { images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', images: [image] },
  };
};
