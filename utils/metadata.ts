import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { PATHNAME_HEADER } from '@/utils/constants';

const WOW_SITE = 'b075rjfvvn';
const WOW_BASE = `https://getwowimg.com/${WOW_SITE}`;

// Raw HTML so React doesn't hoist the async script into <head>
export const WOW_SCRIPT_HTML = `<script async src="https://getwowimg.com/v.js" data-site="${WOW_SITE}"></script>`;

export const getRequestPath = (): string | null => headers().get(PATHNAME_HEADER);

// Open Graph / Twitter preview image rendered by getwowlink for the given page path
export const getPreviewImageMetadata = (path: string): Metadata => {
  const slug = path.replace(/^\/+|\/+$/g, '') || 'index';
  const image = `${WOW_BASE}/${slug}.png`;

  return {
    openGraph: { images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', images: [image] },
  };
};

// `&` and `+` are legal raw in a pathname but would change the meaning of a query value
export const getVisitPixelUrl = (path: string): string =>
  `${WOW_BASE}/v.gif?p=${path.replace(/&/g, '%26').replace(/\+/g, '%2B')}`;
