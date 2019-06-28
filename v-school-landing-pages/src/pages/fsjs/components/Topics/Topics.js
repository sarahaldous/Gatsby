import React from "react"
import styled from "@emotion/styled"

function Topics({ data }) {
    const Container = styled.section`
        margin-bottom: 88px;
        text-align: center;
        background-color: var(--black);
        padding: 80px 0;
        clip-path: polygon(0 2.5vw, 100% 0, 100% 100%, 0 calc(100% - 2.5vw));

        @media (min-width: 900px) {
            padding: 140px 0;
        }
    `

    const H1 = styled.h1`
        color: var(--white);
        margin-top: 0;

        @media (min-width: 900px) {
            font-size: 64px;
        }
    `

    const Img = styled.img`
        width: 100%;

        @media (min-width: 900px) {
            width: 510px;
        }
    `

    return (
        <Container>
            <H1>We'll Teach You</H1>
            <Img
                src={require(`../../../../images/${data.image}`)}
                alt="List of Topics taught at V School"
            />
        </Container>
    )
}

export default Topics
