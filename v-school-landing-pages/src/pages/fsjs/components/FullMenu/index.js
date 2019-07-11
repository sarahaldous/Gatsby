import React, { Component } from "react"
import styled from "@emotion/styled"
import { Link } from "react-scroll"

class FullMenu extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    handleMouseEnter = () => {
        this.setState({ show: true })
    }

    handleMouseLeave = () => {
        this.setState({ show: false })
    }

    render() {
        const Menu = styled.ul`
            display: block;
            list-style-type: none;
            width: 100%;
            text-align: right;
        `

        const Li = styled.li`
            display: inline-block;
            position: relative;
            font-family: work-sans, sans-serif;
            // text-transform: uppercase;
            float: none;
            letter-spacing: 2px;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;

            & > a {
                color: var(--black);

                :hover {
                    color: var(--green);
                }
            }
        `

        const Button = styled.button`
            width: 80px;
            height: 32px;
            padding: 7px 19px;
            // text-transform: uppercase;
            font-size: 13px;
            font-weight: 700;
        `

        const Dropdown = styled.div`
            position: absolute;
            color: var(--white);
            background-color: var(--black);
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: space-evenly;
            box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
            top: 30px;
            white-space: nowrap;
            z-index: 3;
        `

        const Item = styled.a`
            padding: 20px;
        `

        const A = styled.a`
            padding: 20px 25px;
        `

        const source = process.env.SOURCE

        return (
            <Menu>
                <Li
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    <A>Courses</A>
                    {this.state.show && (
                        <Dropdown>
                            <Item href={`https://vschool.io/${source}/fsjs`}>
                                Full Stack JavaScript
                            </Item>
                            <Item href={`https://vschool.io/${source}/xd`}>
                                Experience Design
                            </Item>
                        </Dropdown>
                    )}
                </Li>
                <Li>
                    <A href="https://vschool.io/gibill/">Veterans</A>
                </Li>
                <Li>
                    <A href="https://vschool.io/paylater/">Pay Later</A>
                </Li>
                <Li>
                    <A href="https://vschool.io/freereactcourse/">
                        Free Course
                    </A>
                </Li>
                <Li>
                    {/*<Link*/}
                        {/*style={{ padding: 20 }}*/}
                        {/*to="events"*/}
                        {/*smooth={true}*/}
                        {/*duration={800}*/}
                    {/*>*/}
                    <a href="https://vschool.io/scholarships/contravent" style={{ padding: 20 }}>
                        Scholarships
                    </a>

                    {/*</Link>*/}
                </Li>
                <Li>
                    <Link
                        style={{ padding: 20 }}
                        to="book"
                        smooth={true}
                        duration={800}
                    >
                        <Button>Apply</Button>
                    </Link>
                </Li>
            </Menu>
        )
    }
}

export default FullMenu
