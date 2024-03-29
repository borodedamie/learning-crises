const pageQuery = `{
    allContentfulEduInsight {
        nodes {
          id
          createdAt
          title
          author
          coverImage {
            gatsbyImageData(formats: WEBP)
          }
        }
    }
}`

function pageToAlgoliaRecord({ id, createdAt, title, author, ...rest }) {
    return {
        objectID: id,
        createdAt,
        title,
        author,
        ...rest,
    }
}

const queries = [
    {
        query: pageQuery,
        transformer: ({ data }) => data.allContentfulEduInsight.nodes.map(pageToAlgoliaRecord),  
    }
]

module.exports = queries