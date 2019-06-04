import React from "react"
import Header from '../components/header'
import Paragraph from '../components/header'

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" />
    <Paragraph paragraphText="Such wow. Very React." />
    <Paragraph paragraphText="More paragraphs. Can't ever have enough."/>
  </div>
)
