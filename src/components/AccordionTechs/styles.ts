import styled from 'styled-components'

export const ImgTech = styled.img<React.ImgHTMLAttributes<HTMLImageElement>>`
    width: 2rem;
    margin: 0.5rem;
    @media screen and (max-width: 600px) {
        width: 2.1rem;
    }
`
