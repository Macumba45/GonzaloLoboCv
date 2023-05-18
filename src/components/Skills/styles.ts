import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120vh;
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

export const SkillsContainerAll = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const SkillsContainer = styled.div`
    display: flex;
    margin: 0 auto;
    line-height: 2.5rem;
    margin-bottom: 2rem;
    margin-left: 8rem;
    margin-right: 8rem;
    margin-top: 3rem;
    @media screen and (max-width: 600px) {
        margin-left: 0rem;
        margin-right: 0rem;
    }
`

export const SkillsContainerLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
        width: 300px;
    }
`

export const ImgColombia = styled.img`
    width: 4rem;
    height: auto;
    margin-bottom: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
    @media screen and (max-width: 600px) {
        width: 4rem;
    }
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