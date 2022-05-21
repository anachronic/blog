import { GetStaticProps } from 'next'
import React from 'react'
import { ArticleList } from '../components/article-list'
import { Layout } from '../components/layout'
import { Article } from '../types/article'
import { Helmet } from 'react-helmet-async'
import { readArticles } from '../util/markdown'

interface Props {
  articles: Array<Article>
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await readArticles('./sources/articles')

  return {
    props: {
      articles,
    },
  }
}

const Wiki: React.FC<Props> = ({ articles }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Articles | Nicolás Salas V.</title>
      </Helmet>

      <Layout>
        <h1>Articles</h1>

        <ArticleList pathPrefix="articles" articles={articles} />
      </Layout>
    </React.Fragment>
  )
}

export default Wiki
