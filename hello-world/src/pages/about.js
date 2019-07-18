import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
// import Header from '../components/header'
// import Footer from "../components/footer"
// import Paragraph from '../components/paragraph'

export default () => (
  // <div style={{ color: `teal` }}>
    /* <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" /> */
    
    /* <Paragraph paragraphText="Such wow. Very React." />
    <Paragraph paragraphText="More paragraphs. Can't ever have enough."/> */
    <Layout>
      
      <p> <Link to="/contact">Wish to contact us? Please do.</Link></p>
      
    </Layout>
    
   
  // </div>
)
