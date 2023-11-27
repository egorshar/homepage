'use client';

import { isFunction } from 'lodash';
import { useEffect } from 'react';
import { measure } from 'perfninja';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

import { isDev } from '@/utils/index';
import { GOOGLE_ANALYTICS_ID } from '@/utils/constants';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url) => {
  if (isDev() || !isFunction(window.gtag)) return;

  window.gtag('config', GOOGLE_ANALYTICS_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (isDev() || !isFunction(window.gtag)) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

if (!isDev()) {
  measure('9bc8d44b-b8b6-49e2-8aca-197868adbb80', {
    markName: 'requestStart'
  })
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    pageView(pathname);
  }, [pathname, searchParams]);

  if (isDev()) {
    return null;
  }

  return (
    <>
      <Script
        id='gtag'
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />

      <Script
        id='gtag-config'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `,
        }}
      />
    </>
  );
}