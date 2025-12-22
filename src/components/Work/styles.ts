import styled from 'styled-components'

export const MainContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
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

export const TitleContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-top: 3rem;
    margin-bottom: 3rem;
`

export const Title = styled.h1<React.HTMLAttributes<HTMLHeadingElement>>`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
`

export const WorkContainerAll = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const WorkContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
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

export const WorkContainerLogo = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    height: 5rem;
`

export const WorkTitle = styled.h3<React.HTMLAttributes<HTMLHeadingElement>>`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1.4rem;
    font-weight: 700;   
    text-align: center;
`

export const WorkSubTitle = styled.p<React.HTMLAttributes<HTMLParagraphElement>>`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
`

export const WorkDate = styled.p<React.HTMLAttributes<HTMLParagraphElement>>`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1rem;
    font-weight: 200;
    text-align: center;
`

export const ImgColombia = styled.img<React.ImgHTMLAttributes<HTMLImageElement>>`
    width: 12rem;
    height: 80px;
    margin-bottom: 3rem;
    border-radius: 10px;
`

export const ImgRamirez = styled.img<React.ImgHTMLAttributes<HTMLImageElement>>`
    width: 13rem;
    margin-bottom: 3rem;
`

export const SpanBold = styled.span<React.HTMLAttributes<HTMLSpanElement>>`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-weight: 700;
`
