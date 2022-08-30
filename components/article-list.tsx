import React from 'react'
import Link from 'next/link'
import { Article } from '../types/article'
import styled from '@emotion/styled'

const ArticleRow = styled.div`
  font-size: 1.2rem;
  padding: 7px;

  &:not(:last-child) {
    border-bottom: 1px dashed #ccc;
  }
`

interface Props {
  articles: Array<Article>
  pathPrefix: string
}

export const ArticleList: React.FC<Props> = ({ articles, pathPrefix }) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleRow key={article.slug}>
          <span className="date">{article.date}</span>

          <Link href={`/${pathPrefix}/${article.slug}`}>
            <a css={{ marginLeft: '0.3rem' }}>{article.title}</a>
          </Link>
        </ArticleRow>
      ))}
    </div>
  )
}
