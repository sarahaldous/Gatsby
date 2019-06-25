import React from "react"
import PropTypes from "prop-types"
// import { withStyles } from "@material-ui/core/styles"
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
// import List from "@material-ui/core/List"
// import ListItem from "@material-ui/core/ListItem"
// import ListItemText from "@material-ui/core/ListItemText"
// import Collapse from "@material-ui/core/Collapse"
// import ExpandLess from "@material-ui/icons/ExpandLess"
// import ExpandMore from "@material-ui/icons/ExpandMore"
import BurgerIcon from "../BurgerIcon"
import styled from "@emotion/styled"
import { Link } from "react-scroll"

const styles = {
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    },
    nested: {
        paddingLeft: 40
    }
}

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />
}

const Button = styled.button`
    font-size: 14px;
    font-weight: 600;
    // text-transform: uppercase;
    letter-spacing: 1px;
    width: 80px;
    height: 32px;
`

class SwipeableTemporaryDrawer extends React.Component {
    state = {
        open: false
    }

    toggleDrawer = open => () => {
        this.setState({
            open: open
        })
    }

    toggleCoursesSubMenu = () => {
        this.setState(prevState => ({
            coursesOpen: !prevState.coursesOpen
        }))
    }

    render() {
        const { classes } = this.props
        const source = process.env.SOURCE

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button onClick={this.toggleCoursesSubMenu}>
                        <ListItemText primary="Courses" />
                        {this.state.coursesOpen ? (
                            <ExpandLess />
                        ) : (
                            <ExpandMore />
                        )}
                    </ListItem>
                    <Collapse
                        in={this.state.coursesOpen}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List component="div" disablePadding>
                            <ListItemLink
                                href={`https://vschool.io/${source}/fsjs`}
                                className={classes.nested}
                            >
                                <ListItemText primary="Full Stack JavaScript" />
                            </ListItemLink>
                            {/*TODO: Update the links to contain the correctly-routed URLs from a config file*/}
                            <ListItemLink
                                href={`https://vschool.io/${source}/xd`}
                                className={classes.nested}
                            >
                                <ListItemText primary="Experience Design" />
                            </ListItemLink>
                        </List>
                    </Collapse>

                    <ListItemLink href="https://vschool.io/gibill/">
                        <ListItemText primary="Veterans" />
                    </ListItemLink>

                    <ListItemLink href="https://vschool.io/paylater/">
                        <ListItemText primary="Pay Later" />
                    </ListItemLink>

                    <ListItemLink href="https://vschool.io/freereactcourse/">
                        <ListItemText primary="Free Course" />
                    </ListItemLink>

                    <Link
                        to="events"
                        smooth={true}
                        duration={800}
                        onClick={this.toggleDrawer(false)}
                    >
                        <ListItemLink href="#">
                            <ListItemText primary="Scholarships" />
                        </ListItemLink>
                    </Link>

                    <Link
                        to="book"
                        smooth={true}
                        duration={800}
                        onClick={this.toggleDrawer(false)}
                    >
                        <ListItem>
                            {/*<Button>Apply</Button>*/}
                            <ListItemText primary="Apply" />
                        </ListItem>
                    </Link>
                    {/*{["Inbox", "Starred", "Send email", "Drafts"].map(text => (*/}
                    {/*<ListItem button key={text}>*/}
                    {/*<ListItemText primary={text} />*/}
                    {/*</ListItem>*/}
                    {/*))}*/}
                </List>
            </div>
        )

        return (
            <div>
                <BurgerIcon onClick={this.toggleDrawer(true)} />
                <SwipeableDrawer
                    anchor="right"
                    open={this.state.open}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        // onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        )
    }
}

SwipeableTemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SwipeableTemporaryDrawer)
