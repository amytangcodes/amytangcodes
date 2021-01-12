import React, { Component } from 'react'
import { Link } from 'gatsby'

class Menu extends Component {
  render() {
    const { menu } = this.props

    const menuBlock = (
      <ul className="menu__list">
        {menu.map((item, i) => (
          <li className="menu__list-item" key={i}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
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
