import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Header from '../components/Header'

class HomeIndex extends Component {
  render() {
    const { siteTitle, siteDescription } = this.props.data.site.siteMetadata
    const { children } = this.props

    console.log(children)
    return (
      <Fragment>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <Header {...this.props} />
        {/* <div id="main">{children}</div> */}
      </Fragment>
    )
  }
}

export default HomeIndex

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteTitle
        author
        siteDescription
        footer {
          href
          label
        }
        menuLinks {
          name
          path
        }
      }
    }
  }
`
