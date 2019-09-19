import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
   
    <Header />
    {children}
    
  </div>
)
