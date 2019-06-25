import React from "react"
import styled from "@emotion/styled"

function Reviews({ data }) {
    const Container = styled.section`
        margin-bottom: 88px;
    `

    const H1 = styled.h1`
        width: 100%;
        text-align: center;

        @media (min-width: 900px) {
            font-size: 64px;
        }
    `

    const Ratings = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 900px) {
            flex-direction: row;
            justify-content: space-around;
        }
    `
    const Rating = styled.div`
        margin-bottom: 48px;
        text-align: center;
    `

    const ratings = data.reviews.map((item, i) => (
        <Rating key={i + 1}>
            <h3>{item.score}</h3>
            {/* <img src={require(`../../images/logos/${item.logo}`)} /> */}
        </Rating>
    ))

    return (
        <Container>
            <H1>{data.title}</H1>
            <Ratings>{ratings}</Ratings>
        </Container>
    )
}

export default Reviews
