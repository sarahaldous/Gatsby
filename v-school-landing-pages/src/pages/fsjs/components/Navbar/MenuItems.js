import React, { Fragment, Component } from "react"
import styled from "@emotion/styled"
// import Menu from "@material-ui/core/Menu"
// import MenuItem from "@material-ui/core/MenuItem"
// import ListItem from "@material-ui/core/ListItem/ListItem"
// import Link from "@material-ui/core/Link"

function ListItemLink(props) {
    return <ListItem component="a" {...props} />
}

class MenuItems extends Component {
    constructor() {
        super()
        this.state = {
            anchorEl: null
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    render() {
        const Button = styled.button`
            font-size: 14px;
            font-weight: 600;
            // text-transform: uppercase;
            letter-spacing: 1px;
            width: 80px;
            height: 32px;
        `

        const Li = styled.li`
            color: var(--white);
            cursor: pointer;
            transition: all 500ms ease;

            :hover,
            :active {
                color: var(--green);
            }
        `

        const A = styled.a`
            color: var(--gray);
        `

        const styles = {
            menuItem: {
                backgroundColor: "none"
            }
        }

        const { anchorEl } = this.state

        return (
            <Fragment>
                <li>
                    <ListItemLink
                        onClick={this.handleClick}
                        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                    >
                        Courses
                    </ListItemLink>
                </li>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem
                        classes={styles.menuItem}
                        onClick={this.handleClose}
                    >
                        <A href="#">Full Stack JavaScript</A>
                    </MenuItem>
                    <MenuItem
                        classes={styles.menuItem}
                        onClick={this.handleClose}
                    >
                        <A href="#">Experience Design</A>
                    </MenuItem>
                </Menu>
                <li>
                    <a href="https://vschool.io/gibill/">Veterans</a>
                </li>
                <li>
                    <a href="https://vschool.io/paylater/">Pay Later</a>
                </li>
                <li>
                    <a href="https://vschool.io/freereactcourse/">
                        Free Course
                    </a>
                </li>
                <li>
                    <a href="#">Scholarships</a>
                </li>
                <li>
                    <Button>Apply</Button>
                </li>
            </Fragment>
        )
    }
}

export default MenuItems
