
import App, { Container } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import withGA from "next-ga";
import React from 'react'

import { GOOGLE_ANALYTICS_ID } from '../utils/constants'

class EgorShar extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <Head>
          <title>Egor Sharapov's Homepage</title>
        </Head>
        <Component />
      </Container>
    )
  }
}

export default withGA(GOOGLE_ANALYTICS_ID, Router)(EgorShar);
