import React from 'react'

import HeaderCover from './HeaderCover'
import HeaderMenu from './HeaderMenu'
import HeaderFooter from './HeaderFooter'

const Header = ({ data }) => {
  console.log({ data })
  const { footer, menuLinks } = data
  return (
    <header id="header">
      <HeaderCover />
      <HeaderMenu data={menuLinks} />
      <HeaderFooter data={footer} />
    </header>
  )
}

export default Header
