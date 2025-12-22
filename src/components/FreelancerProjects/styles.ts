import styled from 'styled-components'

export const MainContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
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

export const ImageContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    width: 100%;
    background-color: white;
    align-items: center;
    @media screen and (max-width: 600px) {
    }
`
export const TitleContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-top: 5rem;
`

export const Title = styled.h1<React.HTMLAttributes<HTMLHeadingElement>>`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
`

export const ImgColombia = styled.img<React.ImgHTMLAttributes<HTMLImageElement>>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: auto;
    cursor: pointer;
    margin: 0 auto;
     @media screen and (max-width: 800px) {
        width: 100%;
    }
  
`

export const SpanBold = styled.span<React.HTMLAttributes<HTMLSpanElement>>`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-weight: 700;
`

export const LabelProject = styled.label<React.HTMLAttributes<HTMLLabelElement>>`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 1rem;
`
