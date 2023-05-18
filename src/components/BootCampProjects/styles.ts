import styled from 'styled-components'


export const MainContainer = styled.div`
    width: 100%;
    margin-top: 5rem;
    height: 120vh;
    z-index: 9999;
    @media screen and (max-width: 600px) {
        height: 140vh;
    }
`

// export const FullWidthCarousel = styled(Carousel)`
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     margin: 0;
//     padding: 0;

//     .carousel-root {
//         width: 100%;
//         margin: 0;
//         padding: 0;
//     }
// `

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
    align-items: center;
    height: auto;
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
    width: 1200px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
        width: 390px;
    }
`

export const ContainerProject = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5rem;
    height: 50rem;
`

export const ContainerProjectTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 2rem;
`

export const TitleProject = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: white;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    background-color: black;
    width: 100px;
    display: flex;
    justify-content: center;
    border-radius: 20px;
`

export const ContainerProjectDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerTech = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const ProjectDescription = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 1rem;
    font-weight: 500;
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

export const ImgTech = styled.img`
    width: 3rem;
    height: auto;
    margin-left: 2rem;
    margin-right: 2rem;

    @media screen and (max-width: 600px) {
        width: 3rem;
    }
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-weight: 700;
`
