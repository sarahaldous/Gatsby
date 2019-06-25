import React from "react"
import styled from "@emotion/styled"
import facebook from "src/images/icons/social/Icon_Facebook.png"
import instagram from "src/images/icons/social/Instagram.png"
import linkedin from "src/images/icons/social/LinkedIn.png"
import twitter from "src\images\icons\social\Twitter.png"
import youtube from "src\images\icons\social\YouTube.png"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--black);
    color: var(--white);
    padding: 0 40px;

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-around;
        padding: 50px 40px 80px;
    }
`

const Group = styled.div`
    // margin-bottom: 40px;
`

const H5 = styled.h5`
    font-size: 20px;
    font-weight: 400;
    color: var(--beige);
    // text-transform: uppercase;
    margin-bottom: 20px;
`

const P = styled.p`
    margin: 0 auto;

    & > a {
        color: var(--white);
        text-decoration: none;
        margin-bottom: 8px;
        display: inline-block;
        margin-bottom: 8px;
    }
`

const Small = styled.small`
    color: var(--beige);
    display: inline-block;
    margin-bottom: 20px;
`

const Img = styled.img`
    width: 30px;
`

function Footer({data}) {
    return (
        <Container>
            <Group>
                <H5>V School</H5>
                <P>150 S. State Street</P>
                <P>Salt Lake City, UT</P>
                <P>(801)682-4042</P>
                <P>team@vschool.io</P>
            </Group>
            <Group>
                <H5>Next Sessions</H5>
                <P>Full Stack JS - Full Time</P>
                <Small>Starting {data.fsjs.nextSession.date}</Small>
                <P>Experience Design - Full Time</P>
                <Small>Starting {data.xd.nextSession.date}</Small>
            </Group>
            <Group>
                <H5>Stay in the Loop</H5>
                <a href="https://www.facebook.com/VSCHOOLHQ/">
                    <Img src={facebook} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/vschool_/">
                    <Img src={instagram} alt="Instagram" />
                </a>
                <a href="https://twitter.com/vschoolhq?lang=en">
                    <Img src={twitter} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/school/v-school/">
                    <Img src={linkedin} alt="Linkedin" />
                </a>
                <a href="https://www.youtube.com/channel/UCSD751HQwIFQOyOd7ZjBogA?">
                    <Img src={youtube} alt="YouTube" />
                </a>
            </Group>
            <Group>
                <H5>Helpful Links</H5>
                <P>
                    <a href="https://vschool.io/gibill/">Veterans</a>
                </P>
                <P>
                    <a href="https://vschool.io/paylater/">Pay Later</a>
                </P>
                <P>
                    <a href="https://vschool.io/freereactcourse/">
                        Free Course
                    </a>
                </P>
                {/*<P>*/}
                {/*<a href="#">Scholarships</a>*/}
                {/*</P>*/}
            </Group>
        </Container>
    )
}

export default Footer
