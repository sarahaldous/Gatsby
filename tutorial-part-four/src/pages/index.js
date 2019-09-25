import React from "react"
import Layout from "../components/layout"
import "../styles.css"

export default () => (
  <Layout>
    <h2 style={{ display: `flex`, justifyContent: `center`}} > V School Project Site</h2>
    <div >
      <p>
        This site was designed to display the various projects submitted by V School students and alumni. These projects showcase everything from the very early pre-course projects completed before classes even started to the culminating individual and group fullstack projects done at the end of the 12-week immersive course. 
      </p>
      <p>
        This is meant to give students inspiration as to what projects they might do, and an idea of how much they're likely to have learned by the end of the three months. 
      </p>
    </div>
  </Layout>
)