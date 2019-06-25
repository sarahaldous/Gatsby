import React from "react"
import styled from "@emotion/styled"
import { Link } from "react-scroll"
// import BackgroundSVG from "./BackgroundSVG"

function NextSession({ data }) {
    const Container = styled.section`
        margin: 0 10px 88px;
        background-color: var(--black);
        color: var(--white);
        // text-transform: uppercase;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0 14px 58px;

        @media (min-width: 630px) {
            margin: 0 50px 88px;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 50px 0;
        }
    `

    const Circle = styled.div`
        border-radius: 50%;
        background-color: var(--red);
        width: 71px;
        height: 71px;
        position: relative;
        top: -30px;
        left: 8px;

        @media (min-width: 630px) {
            align-self: flex-start;
            position: absolute;
            top: -50px;
            left: 32px;
        }

        @media (min-width: 820px) {
            height: 120px;
            width: 120px;
        }

        @media (min-width: 1000px) {
            height: 164px;
            width: 164px;
        }
    `

    const FlexItem = styled.div`
        @media (min-width: 630px) {
            margin: 10px;
        }

        @media (min-width: 820px) {
            margin: 20px;
        }

        @media (min-width: 1100px) {
            margin: 30px;
        }
    `

    const H2 = styled.h2`
        font-size: 32px;
        color: var(--green);
        font-family: conglomerate, serif;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 0;

        @media (min-width: 630px) {
            font-size: 40px;
        }

        @media (min-width: 820px) {
            font-size: 48px;
        }

        @media (min-width: 1100px) {
            font-size: 64px;
        }
    `

    const H3 = styled.h3`
        font-size: 48px;
        color: var(--white);
        font-family: work-sans, sans-serif;
        font-weight: 700;
        margin-bottom: 22px;

        @media (min-width: 820px) {
            font-size: 64px;
        }

        @media (min-width: 1100px) {
            font-size: 80px;
        }
    `

    const Button = styled.button`
        background-color: var(--green);
        color: var(--white);
        font-size: 17px;
        font-weight: 600;
        // text-transform: uppercase;
        letter-spacing: 4px;
        margin-bottom: 30px;
        width: 217px;
        height: 56px;
        border: none;
    `

    const P = styled.p`
        font-size: 20px;
        text-transform: none;
        margin: 7px 0;

        ::before {
            content: "_";
        }
    `

    const details = data.list.map((text, i) => <P key={i + 1}>{text}</P>)

    return (
        <Container>
            <FlexItem>
                <Circle />
            </FlexItem>
            <FlexItem className="info">
                <H2>Next Session</H2>
                <H3>{data.date}</H3>
                <Link to={"book"} smooth={true} duration={800}>
                    <Button>Get Started</Button>
                </Link>
            </FlexItem>
            <FlexItem>{details}</FlexItem>
        </Container>
    )
}

export default NextSession
