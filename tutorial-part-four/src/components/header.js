import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
 
    <header style={{ marginBottom: `1.5rem` }}>
      
        <h3 className="layoutHeader"style={{ display: `inline` }}>Projects from V School. Two Counters. And also Panda pics.</h3>
     
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/counter/">Counter</ListLink>
        <ListLink to="/hooks-counter/">Hooks Counter</ListLink>
        <ListLink to="/newprojects/">Add New Project</ListLink>
      </ul>
    </header>
)
