import React from 'react'
import Helmet from 'react-helmet'
import '../assets/scss/main.scss'

const Template = ({ children }) => {
  const siteTitle = 'Amy Tang Codes'
  const siteDescription = 'Another software developer portfolio site!'

  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">{children}</div>
    </div>
  )
}

export default Template
