import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import Header from '../components/header'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import '../style/globals.scss'

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/using-typescript/">Go to Using TypeScript</Link>
        <Link to="/files/">See the fiels</Link>
      </Layout>
    </>
  )
}

export default IndexPage
