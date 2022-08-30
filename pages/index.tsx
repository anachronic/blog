import React from 'react'
import { IndexLayout } from '../components/index-layout'
import Head from 'next/head'
import styled from '@emotion/styled'
import { Container } from '../lib/container'

const Header = styled.div`
  background-color: #7957d5;
  color: black;
  min-height: 20vh;
  display: flex;
  flex-grow: 1;

  & ${Container} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const HeaderTitle = styled.div`
  ${Header} ${Container} & {
    color: #e6e6e6;
    font-size: 3em;
  }
`

const HeaderSubtitle = styled.div`
  ${Header} ${Container} & {
    color: #e6e6e6;
    font-size: 1.5em;
  }
`

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
        <Header>
          <Container>
            <HeaderTitle>Nicolás Salas V.</HeaderTitle>
            <HeaderSubtitle>A personal website</HeaderSubtitle>
          </Container>
        </Header>

        <Container as="section" css={{ fontSize: '1.3rem' }}>
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
        </Container>
      </IndexLayout>
    </>
  )
}

export default IndexPage
