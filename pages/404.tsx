import React from 'react'
import Head from 'next/head'
import { Layout } from '../components/layout'

const NotFoundPage: React.FC = () => (
  <React.Fragment>
    <Head>
      <title>Not found 😭 | Nicolás Salas V.</title>
    </Head>

    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </React.Fragment>
)

export default NotFoundPage
