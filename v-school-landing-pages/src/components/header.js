import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `var(--beige)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <ul className="headerList" style={{ listStyle: `block`, float: `right`, color: `black` }}>
        <Link
         href={`src/images/logos/V-School.png`}
         ></Link>
        <Link to="/">Home</Link>
        <Link to="/about/">Courses</Link>
        <Link to="/contact/">Veterans</Link>
        <Link to="/projects/">Pay Later</Link>
        <Link to="/counter/">Free Course</Link>
        <Link to="/hooks-counter/">Scholarships</Link>
         
        <button>Apply</button>
      </ul>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `var(--black)`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
        </Link>
      
      </h1>
    </div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
