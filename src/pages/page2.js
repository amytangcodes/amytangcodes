import React from 'react'
import Layout from '../components/layout'

const page2 = ({ data }) => {
  return (
    <Layout>
      <h1>Welcome to {data.site.siteMetadata.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query testQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default page2
