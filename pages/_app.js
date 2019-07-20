
import App, { Container } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import React from 'react'

import { trackPageView } from '../utils'

export default class EgorShar extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    Router.onRouteChangeComplete = url => trackPageView(url)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Egor Sharapov's Homepage</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
