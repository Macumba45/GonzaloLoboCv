import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    z-index: 9999;

    @media screen and (max-width: 800px) {
        margin-top: 5rem;
        margin-bottom: 5rem;
        height: 600px;

    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
    }
`
export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-top: 5rem;
`

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
`

export const ImgColombia = styled.img`
    width: 90rem;
    margin-left: 2rem;
    margin-right: 2rem;

     @media screen and (max-width: 800px) {
        width: 90%;
    }
    @media screen and (max-width: 600px) {
        width: 30rem;
    }

   
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-weight: 700;
`
