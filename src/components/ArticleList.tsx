import { Link } from 'gatsby'
import React from 'react'
import { ArticlesQuery } from '../../graphql-types'

interface Props {
  edges: ArticlesQuery['allMarkdownRemark']['edges']
}

export const ArticleList: React.FC<Props> = ({ edges }) => {
  return (
    <div className="articles">
      {edges.map((edge) => (
        <div key={edge.node.id} className="article-name">
          <span className="date">{edge.node.frontmatter?.date}</span>
          <Link
            to={`${edge.node.fields.slug}`}
            style={{ marginLeft: '0.3rem' }}
          >
            {edge.node.frontmatter.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
