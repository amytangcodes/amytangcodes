import React, { Component } from 'react'
import { Link } from 'gatsby'

class Menu extends Component {
  render() {
    // const menu = this.props.data

    // console.log({ menu })

    const menuBlock = (
      <ul className="menu__list">
        <li className="menu__list-item">
          <Link to="/">About</Link>
        </li>
        <li className="menu__list-item">
          <Link to="/resume/">Resume</Link>
        </li>
        <li className="menu__list-item">
          <Link to="/page2/">page2</Link>
        </li>
      </ul>
    )

    return (
      <section id="menu">
        <nav className="menu">{menuBlock}</nav>
      </section>
    )
  }
}

export default Menu
