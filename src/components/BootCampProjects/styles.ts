import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    width: 100%;
    z-index: 9999;
    height: 1100px;
    @media screen and (max-width: 600px) {
        height: 1100px;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    /* height: 800px; */
    @media screen and (max-width: 600px) {
    }
`

export const FullWidthCarousel = styled(Carousel)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
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

export const ImgColombia = styled.img`
    width: 20rem;
    height: auto;
    margin-left: 2rem;
    margin-right: 2rem;
    @media screen and (max-width: 600px) {
        width: 20rem;
    }
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-weight: 700;
`
