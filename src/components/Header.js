import React from 'react'

import HeaderFooter from './HeaderFooter'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a
        href="http://amytangcodes.com/"
        className="image avatar"
        alt="Amy Tang avatar"
      >
        <span>Amy Tang avatar</span>
      </a>
      <h1>
        <strong>Hi, I'm Amy Tang</strong>.
        <br /> I'm a Software Developer living
        <br /> in Toronto, On.
      </h1>
    </div>
    <HeaderFooter />
  </header>
)

export default Header
