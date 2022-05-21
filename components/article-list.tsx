import React from 'react'
import Link from 'next/link'
import { Article } from '../types/article'

interface Props {
  articles: Array<Article>
  pathPrefix: string
}

export const ArticleList: React.FC<Props> = ({ articles, pathPrefix }) => {
  return (
    <div className="articles">
      {articles.map((article) => (
        <div key={article.slug} className="article-name">
          <span className="date">{article.date}</span>
          <Link href={`/${pathPrefix}/${article.slug}`}>
            <a style={{ marginLeft: '0.3rem' }}>{article.title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}
