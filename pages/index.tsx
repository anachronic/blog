import React from 'react'
import { IndexLayout } from '../components/index-layout'
import Head from 'next/head'

const IndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Nicolás Salas V.&apos;s homepage</title>

        <meta property="og:title" content="Nicolás Salas V." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.anachronic.io/" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/3452930?v=4"
        />
      </Head>

      <IndexLayout>
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
      </IndexLayout>
    </>
  )
}

export default IndexPage
