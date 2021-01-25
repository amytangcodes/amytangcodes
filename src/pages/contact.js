import React from 'react'
import Layout from '../components/layout'

const Contact = () => {
  return (
    <Layout>
      <section id="contact">
        <h1 className="section__title">Contact</h1>
        <p>
          Get in touch via email:{' '}
          <a href="mailto:hello@amytangcodes.com">hello@amytangcodes.com</a>
        </p>
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
            <a
              href="https://github.com/amytangcodes"
              className="icon fa-github"
            >
              <span className="label">Github</span>
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default Contact
