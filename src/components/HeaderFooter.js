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
        <ul className="copyright">
          <li>&copy; Amy Tang Codes</li>
          <li>
            Design template inspired by{' '}
            <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </section>
    )
  }
}

export default HeaderFooter
