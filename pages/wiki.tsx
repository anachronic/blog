import { GetStaticProps } from 'next'
import React from 'react'
import { ArticleList } from '../components/article-list'
import { Layout } from '../components/layout'
import { Article } from '../types/article'
import Head from 'next/head'
import { readArticles } from '../util/markdown'

interface Props {
  articles: Array<Article>
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await readArticles('./sources/wiki')

  return {
    props: {
      articles,
    },
  }
}

const Wiki: React.FC<Props> = ({ articles }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Wiki | Nicolás Salas V.</title>
      </Head>

      <Layout>
        <h1>Wiki articles</h1>

        <ArticleList pathPrefix="wiki" articles={articles} />
      </Layout>
    </React.Fragment>
  )
}

export default Wiki
