import React from 'react'
import Layout from '../components/layout'
import PdfResume from '../../static/21_Amy Tang Resume.pdf'

const Resume = () => {
  return (
    <Layout>
      <section id="resume">
        <h1 className="section__title">Resume</h1>
        <div className="button-container">
          <a href={PdfResume} className="button">
            Download PDF Resume
          </a>
        </div>
        <div class="iframe-container">
          <iframe src={PdfResume} title="Resume" class="iframe-resume">
            Presss me: <a href={PdfResume}>Download PDF</a>
          </iframe>
        </div>
      </section>
    </Layout>
  )
}

export default Resume
