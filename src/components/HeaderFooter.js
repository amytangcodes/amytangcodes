import React from 'react'

const Footer = () => (
  <section id="footer">
    <ul className="icons">
      <li>
        <a
          href="https://www.linkedin.com/in/amytangcodes/"
          className="icon fa-linkedin"
        >
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/amytangcodes" className="icon fa-github">
          <span className="label">Github</span>
        </a>
      </li>
      <li>
        <a href="mailto:hello@amytangcodes.com" className="icon fa-envelope-o">
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>&copy; Amy Tang Codes</li>
      <li>
        Design Template: <a href="http://html5up.net">HTML5 UP</a>
      </li>
    </ul>
  </section>
)

export default Footer
