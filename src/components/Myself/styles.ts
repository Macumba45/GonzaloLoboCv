import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 110vh;
    z-index: 9999;
    @media screen and (max-width: 600px) {
        height: 100vh;
    }
`

export const PictureContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8rem;
`

export const Picture = styled.img`
    border-radius: 100%;
    width: 250px;
    height: 250px;
    background-size: cover;
    object-fit: cover;
    box-shadow: 0px 5px 20px black;
`

export const NameContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`

export const Name = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: black;
    font-size: 3.5rem;
    font-weight: 600;
`

export const StudiesContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const StudiesTitles = styled.h3`
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    text-align: center;
    font-weight: 300;
`
