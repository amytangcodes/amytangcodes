import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        {/* <img src={avatar} alt="" /> */}
      </a>
      <h1>
        <strong>Hi, I'm Amy Tang</strong>.
        <br /> I'm a Software Developer living in Toronto, On.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
