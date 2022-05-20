import React from 'react'
import { Layout } from '../components/layout'
import { Helmet } from 'react-helmet-async'

// import '../style/globals.scss'

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Layout>
        <header className="header">
          <div className="container">
            <div className="header-title">Nicolás Salas V.</div>
            <div className="header-subtitle">A personal website</div>
          </div>
        </header>

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
      </Layout>
    </>
  )
}

export default IndexPage
