import React from "react"
import styled from "@emotion/styled"

function Skills({ data }) {
    const Container = styled.section`
        text-align: center;
        margin: 0 auto 88px;
    `

    const Ul = styled.ul`
        list-style-position: inside;
        list-style-type: none;
        padding: 0;

        @media (min-width: 900px) {
            column-count: 2;
            width: 60%;
            margin: auto;
        }
    `

    const Li = styled.li`
        font-family: work-sans, sans-serif;
        font-size: 20px;
        color: var(--gray);
        margin-bottom: 24px;

        &:before {
            content: "\\25aa";
            color: var(--green);
        }

        & > span {
            margin-left: 5px;
        }
    `

    const skills = data.list.map((text, i) => (
        <Li key={i + 1}>
            <span>{text}</span>
        </Li>
    ))

    return (
        <Container>
            <h1>{data.title}</h1>
            <Ul>{skills}</Ul>
        </Container>
    )
}

export default Skills
