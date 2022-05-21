import React from 'react'
import { Article } from '../types/article'
import { Layout } from './layout'

export interface ArticleProps extends Article {
  htmlContent: string
}

export const ArticleTemplate: React.FC<ArticleProps> = ({
  title,
  date,
  htmlContent,
}) => {
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h4>{date}</h4>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    </Layout>
  )
}
