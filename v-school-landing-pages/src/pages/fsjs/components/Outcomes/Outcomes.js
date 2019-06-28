import React from "react"
import styled from "@emotion/styled"

function Outcomes({ data }) {
    const OutcomesList = styled.section`
        text-align: center;
        padding: 0 20px;
        margin-bottom: 88px;
    `

    const Outcome = styled.div`
        margin-bottom: 40px;
    `

    const H1 = styled.h1`
        margin-bottom: 24px;

        @media (min-width: 900px) {
            font-size: 64px;
        }
    `

    const FlexContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;

        @media (min-width: 900px) {
            flex-direction: row;
            justify-content: space-around;
        }
    `

    const P = styled.p`
        margin: 0;
        font-size: 20px;
    `

    const H2 = styled.h2`
        @media (min-width: 900px) {
            font-size: 40px;
        }
    `

    const ImgContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    `

    const Img = styled.img`
        margin: 10px;
    `
    const outcomesData = data.stats.map((item, i) => (
        <Outcome key={i + 1}>
            <h3>{item.stat}</h3>
            <P>{item.description}</P>
        </Outcome>
    ))

    const companyImages = data.alumniAt.map((company, i) => {
        return (
            <Img
                key={i + 1}
                src={require(`../../../../images/logos/${company.image}`)}
                alt={company.alt}
            />
        )
    })

    return (
        <OutcomesList>
            <H1>Better Outcomes</H1>
            <FlexContainer>{outcomesData}</FlexContainer>
            <H2>Alumni At</H2>
            <ImgContainer>{companyImages}</ImgContainer>
        </OutcomesList>
    )
}

export default Outcomes
