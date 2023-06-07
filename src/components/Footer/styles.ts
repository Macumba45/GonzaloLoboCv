import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 300px;
    background-color: #000000;
`

export const ContainerLogos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContainerDesign = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`

export const DesignedBy = styled.a`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: white;
    font-size: 0.5rem;
    text-align: center;
`
