import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1200px;
    z-index: 9999;
    @media screen and (max-width: 600px) {
        height: 1200px;
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

export const EducationContainerAll = styled.div`
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const EducationContainer = styled.div`
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

export const EducationTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
`

export const EducationSubTitle = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
`

export const EducationDate = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1rem;
    font-weight: 200;
    text-align: center;
`

export const ImgColombia = styled.img`
    width: 15px;
    margin-left: 0.2rem;
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-weight: 700;
`
