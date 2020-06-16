
import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import React from 'react'

import { GOOGLE_ANALYTICS_ID } from '../utils/constants'
import { pageview } from '../utils/gtag'
import { isDev } from '../utils/'

import '../public/static/global.css'

Router.events.on('routeChangeComplete', url => pageview(url))

class EgorShar extends App {
  render() {
    const { Component } = this.props

    return (
      <>
        <Head>
          <title>Egor Sharapov's Homepage</title>
          {
            !isDev() && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GOOGLE_ANALYTICS_ID}');
                  `
                }}
              />
            </>
          )}
        </Head>
        <Component />
      </>
    )
  }
}

export default EgorShar
