import React, { Component } from "react"
import styled from "@emotion/styled"
import vsLogo from "../../../../images/logos/VSLogosmall.png"
// import { Link, animateScroll as scroll } from "react-scroll"
import Drawer from "./Drawer"
import FullMenu from "./FullMenu"

import "./navbar.css"

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            isMobile: false
        }
    }

    componentDidMount() {
        this.updatePredicate()
        window.addEventListener("resize", this.updatePredicate)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate)
    }

    updatePredicate = () => {
        this.setState({ isMobile: window.innerWidth < 900 })
    }

    render() {
        const Nav = styled.nav`
            background-color: var(--beige);
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            padding: 16px;
            margin: 15px auto 30px;

            @media (min-width: 800px) {
                height: 100px;
                padding: 32px 45px;
                margin-bottom: 30px;
            }
        `

        const Logo = styled.img`
            width: 40px;
            height: auto;
            cursor: pointer;

            @media (min-width: 800px) {
                width: 80px;
            }
        `

        const { isMobile } = this.state

        return (
            <Nav>
                <div>
                    <a href="https://vschool.io">
                        <Logo
                            src={vsLogo}
                            alt="V School Logo"
                            className="logo"
                        />
                    </a>
                </div>
                {isMobile ? <Drawer /> : <FullMenu />}
            </Nav>
        )
    }
}

export default Navbar
