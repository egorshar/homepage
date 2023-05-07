import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let locales = ['ru', 'en'];

function getLocale(request) {
  let languages = new Negotiator(request).languages(locales);
  let defaultLocale = 'ru';

  return match(languages, locales, defaultLocale);
}
 
export function middleware(request) {
  const pathname = request.nextUrl.pathname
  const locale = getLocale(request)

  if (locale !== 'ru') {
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    )
  }
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}