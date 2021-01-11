import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/Header'

class HomeIndex extends Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata
    const { children } = this.props

    console.log(children)
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
          </Helmet>
          <Header {...this.props} />
          {/* <div id="main">{children}</div> */}
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
        description
        footer {
          href
          label
        }
        menu {
          label
          path
        }
      }
    }
  }
`
