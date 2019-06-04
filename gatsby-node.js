const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  // createPage is a built in action, available to all `gatsby-node` exports
  const { createPage } = actions
  return new Promise(async resolve => {
    // We need the table name and the unique path for each page
    const result = await graphql(`
      {
        allAirtable {
          edges {
            node {
              table
              data {
                customer
                favicon {
                  url
                }
                features {
                  data {
                    actionTaken
                    buttonText
                    event
                    iconType
                    icon
                    name
                  }
                }
                logo {
                  url
                }
                logoHeight
                pages
                primaryColor
                publishableKey
                slug
                uppercase
              }
            }
          }
        }
      }
    `)

    // For each path, create a page and decide which template to use.
    // values inside the context Object are available in the page's query
    result.data.allAirtable.edges.forEach(({ node }) => {
      if (node.table !== 'Demos') return
      if (!node.data.slug) return
      const { slug } = node.data

      createPage({
        path: slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug,
        },
      })

      if (node.data.pages) {
        node.data.pages.forEach(page => {
          createPage({
            path: `${slug}/${page}`,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              slug,
            },
          })
        })
      }
    })

    resolve()
  })
}
