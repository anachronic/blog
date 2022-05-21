import React from 'react'
import Link from 'next/link'
import { Article } from '../types/article'

interface Props {
  articles: Array<Article>
}

export const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <div className="articles">
      {articles.map((article) => (
        <div key={article.id} className="article-name">
          <span className="date">{article.date}</span>
          <Link href={`/wiki/${article.slug}`}>
            <a style={{ marginLeft: '0.3rem' }}>{article.title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}
