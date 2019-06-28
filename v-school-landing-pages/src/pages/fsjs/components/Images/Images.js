import React from "react"
import styled from "@emotion/styled"

function Images({ data }) {
    const Container = styled.section`
        margin-bottom: 88px;

        @media (min-width: 900px) {
            display: flex;
            justify-content: space-evenly;
        }
    `

    const MainImg = styled.img`
        width: 100%;

        @media (min-width: 900px) {
            width: auto;
        }
    `

    const Div = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `

    const ExtraImgs = styled.img`
        @media (max-width: 899px) {
            display: none;
        }
    `
    const middleImgs = data.middle.map((img, i) => (
        <ExtraImgs src={require(`../../../../images/${img}`)} key={i + 1} />
    ))

    return (
        <Container>
            {/* <MainImg src={require(`../../images/${data.main}`)} /> */}
            <Div>{middleImgs}</Div>
            {/* <ExtraImgs src={require(`../../images/${data.last}`)} /> */}
        </Container>
    )
}

export default Images
