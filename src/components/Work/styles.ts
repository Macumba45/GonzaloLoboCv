import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    @media screen and (max-width: 600px) {
        height: 140vh;
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
    font-size: 3.5rem;
    font-weight: 600;
    text-align: center;
`

export const WorkContainerAll = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const WorkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    line-height: 2.5rem;
    margin-bottom: 2rem;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 3rem;
    @media screen and (max-width: 600px) {
        margin-left: 0rem;
        margin-right: 0rem;
    }
`

export const WorkContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    height: 5rem;
`

export const WorkTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
`

export const WorkSubTitle = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
`

export const WorkDate = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1rem;
    font-weight: 200;
    text-align: center;
`

export const ImgColombia = styled.img`
    width: 12rem;
    height: auto;
    margin-bottom: 3rem;
`

export const ImgRamirez = styled.img`
    width: 13rem;
    margin-bottom: 3rem;
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-weight: 700;
`
