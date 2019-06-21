import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Projects from V School. And also Panda pics.</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/counter/">Counter</ListLink>
        <ListLink to="/hooks-counter/">Hooks Counter</ListLink>
        <ListLink to="/newprojects/">Add New Project</ListLink>
      </ul>
    </header>
    {children}
    <footer className="footer" style={{ marginBottom: `1.5rem`, color: `green`}}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        
      </Link>
      <li style={{ listStyle: `none`, float: `right`, display: `block`, color: `blue` }}>
        
        <ListLink to="/counter/">Counter</ListLink>
        <ListLink to="/hooks-counter/">Hooks Counter</ListLink>
        <ListLink to="/newprojects/">Add New Project</ListLink>
      </li>
    </footer>
  </div>
)

// export default ({ children }) => {
//    return (
//      <div>{children}</div>
//    )
// }