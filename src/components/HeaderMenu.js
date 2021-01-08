import React, { Component } from 'react'
import { Link } from 'gatsby'

class Menu extends Component {
  render() {
    // const menu = this.props.data

    const menuBlock = (
      <ul className="menu__list">
        <li className="menu__list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu__list-item">
          <Link to="/resume/">Resume</Link>
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
