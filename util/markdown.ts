import * as matter from 'gray-matter'
import { Article } from '../types/article'
import { opendir } from 'fs/promises'
import { join, sep } from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import { format } from 'date-fns'

function articleSorter(article1: Article, article2: Article) {
  return new Date(article2.date).getTime() - new Date(article1.date).getTime()
}

export async function readArticles(basePath: string) {
  const dir = await opendir(basePath)

  const articles: Array<Article> = []

  for await (const markdownFile of dir) {
    const filePath = join(basePath, markdownFile.name)
    const fileMatter = matter.read(filePath)

    let date = fileMatter.data.date

    if (date) {
      date = format(date, 'yyyy/MM/dd')
    } else {
      date = 'No date found for article 😞'
    }

    articles.push({
      date,
      slug: markdownFile.name.replaceAll(/\.md$/g, ''),
      title: fileMatter.data.title,
    })
  }

  return articles.sort(articleSorter)
}

export async function readArticle(path: string) {
  const file = matter.read(path)

  const parsedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(file.content)

  const pathSegments = path.split(sep)
  const slug = pathSegments[pathSegments.length - 1].replaceAll(/\.md$/g, '')

  let date = file.data.date

  if (date) {
    date = format(date, 'yyyy/dd/MM')
  } else {
    date = 'No date found for article 😞'
  }

  return {
    slug,
    date,
    title: file.data.title.toString(),
    htmlContent: parsedContent.value.toString(),
  }
}
