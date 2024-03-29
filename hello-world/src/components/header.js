import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./header.module.scss"
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                {data.site.siteMetadata.title}
            
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link to="/" className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem} >Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem}to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link  className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/about">About Us</Link>
                     </li>
                     <li>
                        <Link  className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li>
                  
                </ul>
            </nav>
        </header>
    )
}

export default Header
/* // export default props => <h1>{props.headerText} {props.arbitraryPhrase}</h1> */