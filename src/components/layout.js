import React, { Fragment } from 'react'
import { StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../assets/scss/main.scss'

const Template = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            siteTitle
            author
            siteDescription
            header {
              menuLinks {
                name
                path
              }
              footerLinks {
                href
                label
                icon
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const { siteTitle, siteDescription, header } = data.site.siteMetadata

      return (
        <Fragment>
          <Helmet
            title={siteTitle}
            meta={[
              { name: 'description', content: { siteDescription } },
              { name: 'keywords', content: 'Amy Tang Codes' },
            ]}
          ></Helmet>
          <Header data={header} />
          <div id="main">{children}</div>
        </Fragment>
      )
    }}
  />
)

export default Template
