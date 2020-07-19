import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { IndexLayout } from '../components/IndexLayout'
import Main from '../components/Main'
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
      <IndexLayout>
        <Main
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />
        <section className="container greeting">
          <h1>Hi! I&apos;m Nicolás</h1>

          <p>
            I try to go by <em>anachronic</em> online.
          </p>

          <p>
            I&apos;m a software engineer based in Santiago, Chile. I&apos;
            interested in GraphQL, Typescript and Node.js. I currently do Python
            backend and Vue.js at{' '}
            <a href="https://imfd.cl" target="_blank" rel="noreferrer">
              IMFD
            </a>
            . I really love working with Node.js tools, and so I&apos;m
            currently learning and building{' '}
            <a href="https://github.com/anachronic/todoist-clone-frontend">a</a>{' '}
            <a href="https://github.com/anachronic/todoist-clone-backend">
              few
            </a>{' '}
            <a href="https://github.com/anachronic/graphql-typescript-server-boilerplate">
              projects
            </a>{' '}
            with GraphQL, Typescript and React.
          </p>
        </section>
      </IndexLayout>
    </>
  )
}

export default IndexPage
