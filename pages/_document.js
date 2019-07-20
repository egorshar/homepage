
import Document, { Head, Main, NextScript } from 'next/document'

import { GOOGLE_ANALYTICS_ID } from '../utils/constants'

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx)
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ANALYTICS_ID}');
      `
    };
  }

  render() {
    const { isProduction } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />

          <style global jsx>{`
            :root {
              --grey: #666;
              --darkGrey: #444;
              --fontSize: calc(100vw / 90);
            }
            @media only screen and (max-width: 600px) { :root {
              --fontSize: calc(100vw / 30);
            }}

            @media only screen and (min-width: 600px) and (max-width: 1024px) { :root {
              --fontSize: calc(100vw / 60);
            }}

            @media only screen and (max-device-width: 812px) and (orientation: landscape) { :root {
              --fontSize: 1.7vw;
            }}
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />

          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
              />

              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </>
          )}
        </body>
      </html>
    )
  }
}
