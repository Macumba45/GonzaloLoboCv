import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1100px;
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
    font-size: 3rem;
    font-weight: 600;
`

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    width: 900px;
    text-align: center;
    margin-top: 2rem;

    @media screen and (max-width: 600px) {
        width: 300px;
    }

    @media screen and (max-width: 800px) {
        width: 300px;
    }
`

export const Description = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    width: 100%;
    margin-bottom: 2rem;
    line-height: 2rem;
    white-space: wrap;
    
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-weight: 700;
`
