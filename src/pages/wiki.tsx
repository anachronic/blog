import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { WikiArticlesQuery } from '../../graphql-types'
import { ArticleList } from '../components/ArticleList'
import { Layout } from '../components/Layout'

const Wiki: React.FC = () => {
  const { allMarkdownRemark }: WikiArticlesQuery = useStaticQuery(wikiQuery)

  return (
    <Layout>
      <h1>Wiki articles</h1>
      <ArticleList edges={allMarkdownRemark.edges} />
    </Layout>
  )
}

const wikiQuery = graphql`
  query wikiArticles {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/sources/wiki/" } }
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Wiki
