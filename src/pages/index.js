import React from 'react'
import Layout from '../components/layout'

const HomeIndex = () => {
  return (
    <Layout>
      <section id="one">
        <p>
          I'm a Software Developer with a mix of experience working on web
          applications. I'm currently interested in roles with a focus on
          full-stack web development.
        </p>
        <p>I've dabbled in the following:</p>
        <ul>
          <li>HTML5, CSS3</li>
          <li>React, NodeJS, Gatsby</li>
          <li>Ruby on Rails, Phoenix/ Elixir</li>
          <li>
            Relational databases (PostgreSQL, MySQL), NoSQL databases (MongoDB)
          </li>
          <li>Postman</li>
          <li>Github, Terminal</li>
        </ul>
        <p>
          2020 has been quite the year. After being part of a major layoff, I
          kept busy for most of 2020 renovating my house. 2021 plan is to
          continue learning more about Software Development fundamentals by...
        </p>
        <p>
          Sticking with 1-2 algorithm problems weekly at{' '}
          <a href="https://codesignal.com/">Codesignal</a>.
        </p>
        <p>
          Finish Wes Bos'{' '}
          <a href="https://advancedreact.com/">Advanced React</a> course.
        </p>
        <p>Deploy a timetracker project using Devise with Rails and React.</p>
        <p>Add projects to this website!</p>
      </section>
    </Layout>
  )
}

export default HomeIndex
