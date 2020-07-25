const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

module.exports = {
  onCreateNode: ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
      const slug = createFilePath({
        node,
        getNode,
      })

      createNodeField({
        node,
        name: 'slug',
        value: slug,
      })
    }
  },
  createPages: async ({ graphql, actions }) => {
    const { createPage } = actions
    const articlesQuery = await graphql(`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/sources/articles/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    const wikiQuery = await graphql(`
      query wiki {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/sources/wiki/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    const edges = [
      ...articlesQuery.data.allMarkdownRemark.edges,
      ...wikiQuery.data.allMarkdownRemark.edges,
    ]

    edges.forEach(({ node }) => {
      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve('./src/templates/article.tsx'),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  },
}
