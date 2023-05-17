import styled from 'styled-components'

export const MainContainer = styled.div`
    position: absolute;
    z-index: 2;
    display: flex;
    width: 100%;
    /* position: fixed;
top: 0; */
`

export const ContainerName = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 200px;
    margin: 0 auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 30%;
    font-family: ${({ theme }) => theme.fonts.poppins};
`

export const NameParrafo = styled.p`
    width: 200px;
`

export const ImgLogo = styled.img`
    width: 30px;
    margin-right: 1rem;
`

export const ImgLogoMobile = styled.img`
    width: 30px;
    margin-right: 1rem;
`
