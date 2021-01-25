import React, { Fragment } from 'react'
import { StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './DesktopHeader/Header'
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
              { name: 'keywords', content: 'Amy Tang | Software Developer' },
            ]}
          ></Helmet>
          <Header data={header} />
          <section id="main">{children}</section>
        </Fragment>
      )
    }}
  />
)

export default Template
