import React from 'react'

import HeaderFooter from './HeaderFooter'
import HeaderMenu from './HeaderMenu'

const Header = () => (
  <header id="header">
    <section className="inner">
      <a
        href="http://amytangcodes.com/"
        className="image avatar"
        alt="Amy Tang avatar"
      >
        <span>Amy Tang avatar</span>
      </a>
      <h1>
        <strong>Hi, I'm Amy Tang</strong>.
      </h1>
      <p>
        I'm a Software Developer living
        <br /> in Toronto, ON.
      </p>
    </section>
    <HeaderMenu />
    <HeaderFooter />
  </header>
)

export default Header
