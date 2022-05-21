import * as matter from 'gray-matter'
import { Article } from '../types/article'
import { opendir } from 'fs/promises'
import { join, sep } from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

export async function readArticles(basePath: string) {
  const dir = await opendir(basePath)

  const articles: Array<Article> = []

  for await (const markdownFile of dir) {
    const filePath = join(basePath, markdownFile.name)
    const fileMatter = matter.read(filePath)

    articles.push({
      date: fileMatter.data.date.toString(),
      slug: markdownFile.name.replaceAll(/\.md$/g, ''),
      title: fileMatter.data.title,
    })
  }

  return articles
}

export async function readArticle(path: string) {
  const file = matter.read(path)

  const parsedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(file.content)

  const pathSegments = path.split(sep)
  const slug = pathSegments[pathSegments.length - 1].replaceAll(/\.md$/g, '')

  return {
    slug,
    title: file.data.title.toString(),
    date: file.data.date?.toString() || 'No date found for article 😞',
    htmlContent: parsedContent.value.toString(),
  }
}
