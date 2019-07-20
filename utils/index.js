
import { GOOGLE_ANALYTICS_ID } from './constants';

export function trackPageView(url) {
  try {
    window.gtag('config', GOOGLE_ANALYTICS_ID, {
      page_location: url
    });
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}
