import { GetStaticProps } from 'next'
import React from 'react'
import { ArticleList } from '../components/article-list'
import { Layout } from '../components/layout'
import { Article } from '../types/article'
import { opendir } from 'fs/promises'
import { join } from 'path'
import * as matter from 'gray-matter'
import { Helmet } from 'react-helmet-async'

interface Props {
  articles: Array<Article>
}

export const getStaticProps: GetStaticProps = async () => {
  const basePath = './sources/wiki/'
  const dir = await opendir(basePath)

  const articles: Array<Article> = []

  for await (const markdownFile of dir) {
    const filePath = join(basePath, markdownFile.name)
    const fileMatter = matter.read(filePath)

    articles.push({
      date: fileMatter.data.date.toString(),
      id: markdownFile.name,
      slug: markdownFile.name,
      title: fileMatter.data.title,
    })
  }

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
        <title>Wiki | Nicolás Salas V.</title>
      </Helmet>

      <Layout>
        <h1>Wiki articles</h1>

        <ArticleList articles={articles} />
      </Layout>
    </React.Fragment>
  )
}

export default Wiki
