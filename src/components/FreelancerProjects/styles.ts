import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 9999;
    margin-top: 5rem;
        margin-bottom: 5rem;
        background: rgb(37,37,37);
background: radial-gradient(circle, rgba(37,37,37,1) 6%, rgba(0,0,0,1) 100%);
    @media screen and (max-width: 800px) {
        margin-top: 5rem;
        margin-bottom: 5rem;
        padding-bottom: 0rem;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 100%;

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
    width: 100%;

  
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-weight: 700;
`
