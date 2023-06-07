import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;
    z-index: 9999;

    @media screen and (max-width: 800px) {
        margin-top: 5rem;
        margin-bottom: 5rem;
        height: 1100px;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-top: 3rem;
    margin-bottom: 3rem;
`

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
`

export const EntrepreContainerAll = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const EntrepreContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    line-height: 2.5rem;
    margin-bottom: 2rem;
    margin-left: 10rem;
    margin-right: 10rem;
    margin-top: 3rem;
    @media screen and (max-width: 600px) {
        margin-left: 0rem;
        margin-right: 0rem;
    }
`

export const EntrepreContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const EntrepreTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
`

export const EntrepreSubTitle = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
`

export const EntrepreDate = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1rem;
    font-weight: 200;
    text-align: center;
`

export const ImgColombia = styled.img`
    width: 5rem;
    height: auto;
    margin-bottom: 2rem;
    border-radius: 50%;
`

export const FlagColombia = styled.img`
    width: 15px;
    margin-left: 0.2rem;
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-weight: 700;
`
