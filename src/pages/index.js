import React from 'react'
import Layout from '../components/layout'

const HomeIndex = () => {
  return (
    <Layout>
      <section id="one">
        <p>
          I'm a Software Developer with a mix of experience working on web
          applications. I'm currently interested in roles with a focus on
          working with current Javascript frameworks as I do think my strengths
          are in UI development, but I also want to continue my experiences in
          backend development.
        </p>
        <p>
          <a href="mailto:hello@amytangcodes.com">Connect with me</a> for
          collaboration and networking.
        </p>
        <ul>
          <li>HTML5, CSS3</li>
          <li>React</li>
          <li>Ruby on Rails </li>
          <li>Phoenix/ Elixir</li>
          <li>Relational databases (PostgreSQL, MSSQL, etc.)</li>
          <li>Postman</li>
          <li>Github, Terminal</li>
        </ul>
      </section>
    </Layout>
  )
}

export default HomeIndex
