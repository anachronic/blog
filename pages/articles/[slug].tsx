import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Article } from '../../types/article'
import { readArticle, readArticles } from '../../util/markdown'
import { join } from 'path'
import { Layout } from '../../components/layout'
import { ArticleProps, ArticleTemplate } from '../../components/article-template'

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const files = await readArticles('./sources/articles')
  const routes = files
    .map((file) => ({ slug: file.slug }))
    .map((slugged) => ({ params: slugged }))

  return {
    paths: routes,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<ArticleProps, Params> = async ({
  params,
}) => {
  const { slug } = params!
  const props = await readArticle(join('./sources/articles', `${slug}.md`))

  return {
    props,
  }
}

const BlogArticle: React.FC<ArticleProps> = (props) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <React.Fragment>
      <Helmet>
        <title>{props.title} | Nicolás Salas V.</title>
      </Helmet>

      <ArticleTemplate {...props} />
    </React.Fragment>
  )
}

export default BlogArticle
