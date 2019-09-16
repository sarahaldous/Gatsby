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
    <h1 style={{ margin: 0 }}>Contentful</h1>
    </Link>
      <ul style={{ listStyle: `none`, backgroundImage: `none` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `10px`,
          }}>Home</Link>
          <Link
          to="/about/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `10px`,
          }}>About</Link>
          <Link
          to="/contact/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `10px`,
          }}>Contact</Link>
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
