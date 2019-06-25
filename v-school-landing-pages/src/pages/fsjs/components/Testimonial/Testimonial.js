import React from "react"
import styled from "@emotion/styled"

function Testimonial({ data }) {
    const Container = styled.section`
        margin-bottom: 88px;
        padding: 0 20px;
        text-align: center;

        @media (min-width: 900px) {
            margin: 0 100px 88px;
        }
    `

    const H1 = styled.h1`
        @media (min-width: 900px) {
            font-size: 64px;
        }
    `

    const H4 = styled.h4`
        @media (min-width: 900px) {
            font-size: 32px;
        }
    `

    const P = styled.p`
        font-size: 20px;
        line-height: 28px;
        color: var(--gray);

        ::before {
            content: open-quote;
        }

        ::after {
            content: close-quote;
        }

        @media (min-width: 900px) {
            font-size: 26px;
            line-height: 36px;
        }
    `

    return (
        <Container>
            <H1>{data.title}</H1>
            <P>{data.text}</P>
            <H4>{data.name}</H4>
        </Container>
    )
}

export default Testimonial
