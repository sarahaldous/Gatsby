import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div
  style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  }}
>
  <header
    style={{
      background: `darkCyan`,
      marginBottom: `1.45rem`,
    }}
  >
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
    <h1 style={{ margin: 0 }}></h1>
    </Link>
      <ul style={{ listStyle: `none`, backgroundImage: `none` }}>
        <ListLink
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>Home</ListLink>
          <ListLink
          to="/about/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>About</ListLink>
          <ListLink
          to="/contact/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>Contact</ListLink>
          </ul>
        
        </header>
 
      
        
       
          {siteTitle}
          
        
    </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
