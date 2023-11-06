import { FC, memo } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Carousel from 'react-material-ui-carousel'
import {
    MainContainer,
    Title,
    TitleContainer,
    ImgColombia,
    ImageContainer,
    Container,
} from './styles'

const FreelanceProjects: FC = () => {
    const growthBooster = require('../../assets/macbook/growth.png')
    const toscana = require('../../assets/macbook/toscana.png')
    const inch = require('../../assets/macbook/9inch.png')
    const baby = require('../../assets/macbook/baby.png')
    const allison = require('../../assets/macbook/allison.png')
    const fish = require('../../assets/macbook/FISH.png')
    const sevilla = require('../../assets/macbook/sevillaeste.png')


    const projects: any = [
        {
            img: growthBooster,
            link: 'https://growthboosters.vercel.app/',
        },
        {
            img: fish,
            link: 'https://fishgramapp.vercel.app/es/maps',
        },
        {
            img: sevilla,
            link: 'https://sevillaestefarmacia.vercel.app/',
        },
        {
            img: toscana,
            link: 'https://la-toscana-casa-rural.vercel.app/',
        },
        {
            img: inch,
            link: 'https://sacrifice.9inch.io/',
        },
        {
            img: baby,
            link: 'https://wonderbaby.vercel.app/dashboard/',
        },
        {
            img: allison,
            link: 'https://allisonpsicologia.vercel.app/',
        },
    ]
    //const imagesGrouped = chunk(projects, 3) // Agrupamos los elementos en sub-arreglos de tres
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <MainContainer id="projects" className="projects">
            <Container>
                <Carousel
                    sx={{ cursor: 'pointer' }}
                    indicators={false}
                    autoPlay={false}
                    navButtonsAlwaysVisible={true}
                    cycleNavigation={true}
                    index={1}
                    animation="fade"
                    navButtonsWrapperProps={{
                        style: {
                            height: '100%',
                        },
                    }}
                    navButtonsProps={{
                        style: {
                            // Estilos adicionales para los botones (next y prev)
                            backgroundColor: 'rgba(0, 0, 0, 0.824)', // Ejemplo de fondo transparente
                            // Añade otros estilos según tus necesidades
                        },
                    }}
                >
                    {projects.map((item: any, index: any) => (
                        <ImageContainer key={index}>
                            <a style={{ cursor: 'pointer' }} key={index} target="blank" href={item.link}>
                                <ImgColombia src={item.img} />
                            </a>
                        </ImageContainer>
                    ))}
                </Carousel>
            </Container>
        </MainContainer>
    )
}

export default memo(FreelanceProjects)
