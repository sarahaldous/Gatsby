import React from 'react'
import {Link} from "gatsby"
const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({children}) => (
    <div style={{ margin: `3rem auto`, maxWidth: `70%`, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
                <h3 style={{ display: `inline` }}>MySweetSite</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about">About</ListLink>
                <ListLink to="/contact">Contact</ListLink>
            </ul>
        </header>
        {children}
        <footer style={{ margin: `3rem auto`, color: `blue`, fontSize: `.9 rem`}}>
            <p>I'm putting a footer right here. Nothing you can do about it.</p>
        </footer>
    </div>
)