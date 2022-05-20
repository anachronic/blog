import React from 'react'
import { Layout } from '../components/layout'
import * as matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

interface Props {
  title: string
  htmlContent: string
}

export async function getStaticProps() {
  const file = matter.read('./sources/pages/about.md')

  const parsedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(file.content)

  return {
    props: {
      title: file.data.title,
      htmlContent: parsedContent.value,
    },
  }
}

const AboutPage: React.FC<Props> = ({ title, htmlContent }) => {
  return (
    <Layout>
      <h1>{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </Layout>
  )
}

export default AboutPage
