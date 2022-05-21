import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Article } from '../../types/article'
import { readArticle, readArticles } from '../../util/markdown'
import { join } from 'path'
import { Layout } from '../../components/layout'

interface Params extends ParsedUrlQuery {
  slug: string
}

interface Props extends Article {
  htmlContent: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const files = await readArticles('./sources/wiki')
  const routes = files
    .map((file) => ({ slug: file.slug }))
    .map((slugged) => ({ params: slugged }))

  return {
    paths: routes,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { slug } = params!
  const props = await readArticle(join('./sources/wiki', `${slug}.md`))

  return {
    props,
  }
}

const WikiArticle: React.FC<Props> = ({ title, date, htmlContent }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | Nicolás Salas V.</title>
      </Helmet>

      <Layout>
        <div>
          <h1>{title}</h1>
          <h4>{date}</h4>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default WikiArticle
