const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }    
}

module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    //path.resolve fills in the rest of the path to the root of your hard drive that comes before what's typed here.
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges{
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
        component: blogTemplate,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
            slug: edge.node.fields.slug
        }
    })
})
}














// const path = require('path')


// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions
//     console.log(JSON.stringify(node, undefined, 4))


//     if (node.internal.type === 'MarkdownRemark') {
//         console.log(JSON.stringify(node, undefined, 4))
    
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         createNodeField ({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }

// //         createNodeField({
// //             node,
// //             name: 'slug',
// //             value: slug
// //         })
// //     }
// // }

