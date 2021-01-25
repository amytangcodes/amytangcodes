import React, { Component } from 'react'

export class HeaderFooter extends Component {
  render() {
    const { footer } = this.props

    const iconBlock = (
      <ul className="icons">
        {footer.map((item, i) => (
          <li key={i}>
            <a href={item.href} className={`icon ${item.icon}`}>
              <span className="label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    )

    return (
      <section id="footer">
        {iconBlock}
        <div className="copyright">
          <p>&copy; Amy Tang Codes</p>
        </div>
      </section>
    )
  }
}

export default HeaderFooter
