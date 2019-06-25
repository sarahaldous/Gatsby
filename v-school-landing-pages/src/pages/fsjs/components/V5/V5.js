import React from "react"
import styled from "@emotion/styled"

function V5({ data }) {
    const Container = styled.section`
        margin-bottom: 88px;
        text-align: center;
    `

    const List = styled.ol`
        list-style: none;
        counter-reset: li;
        display: inline-block;
        // flex-direction: column;
        margin: auto;
        padding: 0 17px;

        @media (min-width: 900px) {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    `

    const Li = styled.li`
        counter-increment: li;
        font-size: 24px;
        font-family: conglomerate, serif;
        // text-transform: uppercase;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        white-space: nowrap;

        ::before {
            content: counter(li);
            color: var(--green);
            display: inline-block;
            width: 1.5em;
            margin-left: -1em;
            font-size: 48px;
            font-family: work-sans, sans-serif;
            font-weight: 700;
        }

        @media (min-width: 900px) {
            font-size: 35px;
            justify-content: center;
            flex-wrap: wrap;
            flex-basis: 400px;

            ::before {
                font-size: 64px;
            }
        }
    `

    const H1 = styled.h1`
        @media (min-width: 900px) {
            font-size: 80px;
        }
    `

    const principles = data.list.map((text, i) => <Li key={i + 1}>{text}</Li>)

    return (
        <Container>
            <H1>{data.title}</H1>
            <List>{principles}</List>
        </Container>
    )
}

export default V5
