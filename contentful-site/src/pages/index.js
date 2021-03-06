import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby-Contentful site. This will be an adventure.</p>
    <p>Now go build something great.</p>
    <p>Want to contact us? <a href="/contact">Contact Us</a></p>
    <p>I bet you want to contact us <Link to="/contact"></Link></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
      <img src="https://images.unsplash.com/photo-1522609885-3902c3d44d6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" width="80%"/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
