import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Layout } from '../components/layout'

const NotFoundPage: React.FC = () => (
  <React.Fragment>
    <Helmet>
      <title>Not found 😭 | Nicolás Salas V.</title>
    </Helmet>

    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </React.Fragment>
)

export default NotFoundPage
