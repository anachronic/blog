import React from 'react'
import { graphql, Link } from 'gatsby'
import { ArticlesQuery } from '../../graphql-types'
import { Layout } from '../components/Layout'

interface Props {
  data?: ArticlesQuery
}

const Articles: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Articles</h1>
        <div className="articles">
          {data.allMarkdownRemark.edges.map((edge) => (
            <div key={edge.node.id} className="article-name">
              <span className="date">{edge.node.frontmatter?.date}</span>
              <Link
                to={`/articles${edge.node.fields.slug}`}
                style={{ marginLeft: '0.3rem' }}
              >
                {edge.node.frontmatter.title}
              </Link>
            </div>
          ))}
        </div>
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
