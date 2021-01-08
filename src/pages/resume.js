import React from 'react'
import Layout from '../components/layout'

const Resume = () => {
  return (
    <Layout>
      <section id="two">
        <h2 className="section__title">Resume</h2>
        <ul className="actions">
          <li>
            <a href="../assets/21_Amy Tang Resume.pdf" className="button">
              PDF Resume
            </a>
          </li>
        </ul>
        <h3>
          Get Guided, Toronto, ON — Developer (Contract) April 2020 - June 2020
        </h3>
        Build login (Devise) and landing pages in Rails. Skill Experience:
        Rails, HTML5, and CSS3
      </section>
    </Layout>
  )
}

export default Resume
