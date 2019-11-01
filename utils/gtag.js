
import { isDev } from './index';
import { GOOGLE_ANALYTICS_ID } from './constants';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  if (isDev()) return;

  window.gtag('config', GOOGLE_ANALYTICS_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (isDev()) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
