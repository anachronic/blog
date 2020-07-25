import React from 'react'
import { graphql } from 'gatsby'
import { ArticleQuery } from '../../graphql-types'
import { Layout } from '../components/Layout'
import { navigate } from 'gatsby'

interface Props {
  data?: ArticleQuery
}

const Article: React.FC<Props> = ({ data }) => {
  if (!data) {
    navigate('/404')
    return null
  }

  return (
    <Layout>
      <div>
        <h1>{data.markdownRemark?.frontmatter.title}</h1>
        <h4>{data.markdownRemark?.frontmatter.date}</h4>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html }}
        ></div>
      </div>
    </Layout>
  )
}

export const articleQuery = graphql`
  query article($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
        categories
      }
    }
  }
`

export default Article
