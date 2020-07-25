import { graphql } from 'gatsby'
import React from 'react'
import { ArticlesQuery } from '../../graphql-types'
import { ArticleList } from '../components/ArticleList'
import { Layout } from '../components/Layout'

interface Props {
  data?: ArticlesQuery
}

const Articles: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Articles</h1>
        <ArticleList edges={data.allMarkdownRemark.edges} />
      </div>
    </Layout>
  )
}

export const articles = graphql`
  query articles {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/sources/articles/" } }
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            tags
            categories
            date(formatString: "YYYY-MM-DD")
          }
          excerpt
          timeToRead
          wordCount {
            words
          }
        }
      }
    }
  }
`

export default Articles
