import React from 'react'

import HeaderCover from './HeaderCover'
import HeaderMenu from './HeaderMenu'
import HeaderFooter from './HeaderFooter'

const Header = ({ data }) => {
  const { footerLinks, menuLinks } = data
  return (
    <header id="header">
      <HeaderCover />
      <HeaderMenu menu={menuLinks} />
      <HeaderFooter footer={footerLinks} />
    </header>
  )
}

export default Header
