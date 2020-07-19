import React from 'react'
import { Layout } from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'

const About: React.FC = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { page: { eq: "about" } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `)

  return (
    <Layout>
      <h1>{query.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: query.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default About
