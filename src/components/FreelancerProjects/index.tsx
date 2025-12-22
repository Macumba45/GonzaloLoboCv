import { FC, memo } from 'react'
import Carousel from 'react-material-ui-carousel'
import {
    MainContainer,
    ImgColombia,
    ImageContainer,
    Container,
    LabelProject,
} from './styles'

const FreelanceProjects: FC = () => {
    const growthBooster = require('../../assets/macbook/grow.png')
    const aire = require('../../assets/macbook/aire.png')
    const savvy = require('../../assets/macbook/savvy.png')
    const joobly = require('../../assets/macbook/joobly.png')
    const fish = require('../../assets/macbook/fish.png')
    const farmacia = require('../../assets/macbook/farmacia.png')
    const nomada = require('../../assets/macbook/nomada.png')
    const another = require('../../assets/macbook/another.png')
    const rychat = require('../../assets/macbook/rychat.png')

    const projects: any = [
        {
            img: aire,
            link: 'https://beaire.com',
            label: 'Aire Ancients Baths - Spa & Wellness',
        },
        {
            img: fish,
            link: 'https://fishgramapp.vercel.app/es/maps',
            label: 'FishGram - App to locate fishing spots',
        },
        {
            img: farmacia,
            link: 'https://sevillaestefarmacia.vercel.app/',
            label: 'Sevilla Este Farmacia - Pharmacy',
        },
        {
            img: savvy,
            link: 'https://savvytechhotels.com/',
            label: 'Savvy Tech Hotels - Hotel Fidelity App',
        },
        {
            img: joobly,
            link: 'https://www.joobly.cz/',
            label: 'Joobly - Job Platform',
        },
        {
            img: nomada,
            link: 'https://nomadavibes.vercel.app/es',
            label: 'Nomada Vibes - Travel Agency',
        },
        {
            img: another,
            link: 'https://anotherwayff.com/es/madrid',
            label: 'Another Way - Festival de cine',
        },
        {
            img: rychat,
            link: 'https://rychat.app/',
            label: 'Rychat - Pide una moto en segundos',
        },
        {
            img: growthBooster,
            link: 'https://growthboosters.vercel.app/',
            label: 'Growth Boosters - Marketing Agency',
        },
    ]

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
                            backgroundColor: 'rgba(0, 0, 0, 0.824)', // Ejemplo de fondo transparente
                            // Añade otros estilos según tus necesidades
                        },
                    }}
                >
                    {projects.map((item: any, index: any) => (
                        <ImageContainer key={index}>
                            <LabelProject>
                                {item.label}
                            </LabelProject>
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
