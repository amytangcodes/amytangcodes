import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Cover from '../components/Cover'
import Resume from '../components/Resume'

const HomeIndex = () => {
  const siteTitle = 'Amy Tang Codes'
  const siteDescription = 'Another software developer portfolio site!'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <Cover />
        <Resume />
      </div>
    </Layout>
  )
}

export default HomeIndex
