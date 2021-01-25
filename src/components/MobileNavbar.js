import React from 'react'

const Navbar = ({ data }) => {
  const { menuLinks } = data

  const menuBlock = menuLinks.map((link, i) => (
    <li className="nav-item active" key={i}>
      <a className="nav-link" href={link.path}>
        {link.name} <span className="sr-only">(current)</span>
      </a>
    </li>
  ))

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand image logo" href="/">
        <span>Amy Tang Logo</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">{menuBlock}</ul>
      </div>
    </nav>
  )
}

export default Navbar
