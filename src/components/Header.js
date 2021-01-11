import React from 'react'

import HeaderCover from './HeaderCover'
import HeaderMenu from './HeaderMenu'
import HeaderFooter from './HeaderFooter'

const Header = () => {
  return (
    <header id="header">
      <HeaderCover />
      <HeaderMenu />
      <HeaderFooter />
    </header>
  )
}

export default Header
