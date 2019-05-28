const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  // createPage is a built in action,
  // available to all gatsby-node exports
  const { createPage } = actions
  return new Promise(async resolve => {
    // we need the table name (e.g. "Sections")
    // as well as the unique path for each Page/Section.
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
                    name
                    actionTaken
                    buttonText
                    event
                  }
                }
                logo {
                  url
                }
                logoHeight
                page1
                page2
                page3
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

      createPage({
        path: node.data.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.data.slug,
        },
      })
    })
    resolve()
  })
}
