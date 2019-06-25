import React from "react"
import styled from "@emotion/styled"
import { Link } from "react-scroll"

// import SVG from "./SVG"
// import shadow from "../../images/photo_shadow.svg"

function Intro({ data }) {
    const P = styled.p`
        margin-bottom: 24px;
        color: var(--gray);

        @media (min-width: 900px) {
            font-size: 20px;
        }
    `

    const H1 = styled.h1`
        margin-bottom: 12px;

        @media (min-width: 900px) {
            font-size: 80px;
            margin-bottom: 19px;
        }
    `

    const Button = styled.button`
        background-color: var(--green);
        color: var(--white);
        font-size: 12px;
        font-weight: 600;
        // text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 62px;
        width: 148px;
        height: 40px;
        border: none;
    `

    const FlexContainer = styled.section`
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        margin: 0 10px 88px;

        @media (min-width: 900px) {
            flex-direction: row;
            margin-left: 50px;
            margin-right: 50px;
        }
    `

    const Container = styled.div`
        position: relative;
        display: inline-block;
        align-self: center;

        // ::after {
        //     content: "";
        //     border-radius: 50%;
        //     background-color: var(--red);
        //     width: 7vw;
        //     height: 7vw;
        //     min-width: 65px;
        //     min-height: 65px;
        //     max-width: 100px;
        //     max-height: 100px;
        //     position: absolute;
        //     bottom: 0;
        //     right: 0;
        //     transform: translate(50%, 50%);
        // }

        @media (min-width: 900px) {
            flex-basis: 40%;
            margin-left: 40px;
        }
    `

    const TextContainer = styled.div`
        @media (min-width: 900px) {
            flex-basis: 60%;
        }
    `

    const Img = styled.img`
        width: 100%;
        max-width: 400px;
        float: right;
    `

    return (
        <FlexContainer>
            <TextContainer>
                <H1>{data.header}</H1>
                <P>{data.text}</P>
                <Link to={"book"} smooth={true} duration={800}>
                    <Button>Apply</Button>
                </Link>
            </TextContainer>
            <Container>
                <Img
                    // src={require(`../../images/${data.image}`)}
                    alt="V School Student"
                />
            </Container>
        </FlexContainer>
    )
}

export default Intro
