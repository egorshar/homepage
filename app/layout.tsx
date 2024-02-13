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
        <div className="flex flex-col items-center justify-center mx-6 lg:mx-8 min-h-screen max-h-[1000px]">
          {children}
        </div>
      </body>

      <script key="stloader" type="text/javascript" dangerouslySetInnerHTML={{ __html: `
        (function(e,r,n,t,s){var a=[];e[s]=function(){a.push(arguments)};e[s].queue=a;  var o=[];var i=[];var c=true;var p=void 0;if(window.PerformanceObserver&&  window.PerformanceObserver.supportedEntryTypes&&(  PerformanceObserver.supportedEntryTypes.indexOf("longtask")>=0||  PerformanceObserver.supportedEntryTypes.indexOf("element")>=0)){  p=new PerformanceObserver(function(e){e.getEntries().forEach(function(e){  switch(e.entryType){case"element":i.push(e);break;case"longtask":o.push(e);break;  default:break}})});p.observe({entryTypes:["longtask","element"]})}e[s+"lt"]={  longTasks:o,timingElements:i,inPageLoad:c,observer:p};if(t){var u=r.createElement(n);  u.async=1;u.src=t;var f=r.getElementsByTagName(n)[0];f.parentNode.insertBefore(u,f)}})
        (window,document,"script","//cdn.sematext.com/experience.js","strum");
      `}}/>
          <script key="stconfig" type="text/javascript" dangerouslySetInnerHTML={{ __html:`
        strum('config', { token: 'b05ab693-290a-47e3-a980-59317b9bca5b', 'receiverUrl': 'https://rum-receiver.eu.sematext.com' });
        var oldPushState = history.pushState;
        history.pushState = function(state, title, url) {
          window['strum']('routeChange', url);
          return oldPushState.apply(history, arguments);
        };
     `}}/>
      <Analytics />
    </html>
  );
}