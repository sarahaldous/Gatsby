import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                     </li>
                     <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                  
                </ul>
            </nav>
        </header>
    )
}

export default Header
{/* // export default props => <h1>{props.headerText} {props.arbitraryPhrase}</h1> */}