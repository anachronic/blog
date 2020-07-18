const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

module.exports = {
  onCreateNode: ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
      const slug = createFilePath({
        node,
        getNode,
        basePath: 'articles',
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
    const query = await graphql(`
      query articles {
        allMarkdownRemark {
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

    query.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/articles${node.fields.slug}`,
        component: path.resolve('./src/pages/article.tsx'),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  },
}
