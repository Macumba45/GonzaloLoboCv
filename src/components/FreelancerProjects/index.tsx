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

    const projects: any = [
        {
            img: growthBooster,
            link: 'https://growthboosters.eu/',
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
            link: 'https://wonderbaby.vercel.app/',
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
        <MainContainer id="freelancer-projects" className='freelancer-projects'>
            <Container>
                <TitleContainer>
                    <Title>Freelancer Projects</Title>
                </TitleContainer>

                <Carousel
                    interval={5000}
                    indicators={false}
                    navButtonsAlwaysVisible={true}
                    index={1}
                    height={isMobile ? '500px' : '900px'}
                    cycleNavigation={true}
                    animation="slide"
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        // ...(isMobile && {
                        //     height: '800px ',
                        // }),
                    }}
                    // navButtonsWrapperProps={{
                    //     style: {
                    //         marginRight: '150px',
                    //         marginLeft: '150px',
                    //         position: 'absolute',
                    //         top: '100px',
                    //         ...(isMobile && {
                    //             position: 'absolute',
                    //             marginRight: '120px',
                    //             marginLeft: '120px',
                    //             top: '-60px',

                    //             // Estilos específicos para pantallas menores de 600px
                    //             // Agrega aquí las propiedades específicas para pantallas móviles
                    //         }),
                    //     },
                    // }}
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
                            <a key={index} target="blank" href={item.link}>
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
