import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    z-index: 9999;

    @media screen and (max-width: 600px) {
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-top: 3rem;
    margin-bottom: 2rem;
`

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 3.5rem;
    font-weight: 600;
`

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    width: 1100px;
    text-align: center;
    margin-top: 2rem;

    @media screen and (max-width: 600px) {
        width: 300px;
    }
`

export const Description = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    margin-bottom: 2rem;
    line-height: 2rem;
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-weight: 700;
`
