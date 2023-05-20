
import { FC, memo, useEffect, useState } from 'react'
import TechAccordion from '../AccordionTechs'
import { chunk } from 'lodash'
import {
    MainContainer,
    Title,
    TitleContainer,
    ImgColombia,
    ImageContainer,
    Container,
} from './styles'
import Carousel from 'react-material-ui-carousel'


const FreelanceProjects: FC = () => {


    const growthBooster = require('../../assets/macbook/growth.png')
    const toscana = require('../../assets/macbook/toscana.png')
    const inch = require('../../assets/macbook/9inch.png')
    const baby = require('../../assets/macbook/baby.png')
    const allison = require('../../assets/macbook/allison.png')
    const html = require('../../assets/skills/html.png')
    const css = require('../../assets/skills/css.png')
    const javas = require('../../assets/skills/javascript.png')
    const type = require('../../assets/skills/type.png')
    const firebase = require('../../assets/skills/firebase.png')
    const react = require('../../assets/skills/react.png')
    const docker = require('../../assets/skills/docker.png')
    const framer = require('../../assets/skills/framer.png')
    const git = require('../../assets/skills/git.png')
    const mongo = require('../../assets/skills/mongo.png')
    const styled = require('../../assets/skills/styled.png')
    const mui = require('../../assets/skills/mui.png')
    const node = require('../../assets/skills/node1.png')
    const postgres = require('../../assets/skills/postgres.png')


    const projects: any = [
        {
            img: growthBooster,
            title: 'Project I',
            description: 'Project developed using HTML & CSS',
            tech: html,
            tech1: css,
        },
        {
            img: toscana,
            title: 'Project II',
            description: 'Project developed using JavaScript Vanilla',
            tech: html,
            tech1: css,
            tech2: javas,
            tech3: firebase,
        },
        {
            img: inch,
            title: 'Project III',
            description:
                'Project developed using React, Styled-Components, NodeJS, and PostgreSQL',
            tech: html,
            tech1: css,
            tech2: javas,
            tech3: type,
            tech4: react,
            tech5: docker,
            tech6: postgres,
            tech7: mongo,
            tech8: styled,
            tech9: node,
        },
        {
            img: baby,
            title: 'Project IV',
            description: 'Backend',
            tech: html,
            tech1: css,
            tech2: javas,
            tech3: type,
            tech4: react,
            tech5: docker,
            tech6: postgres,
            tech7: mongo,
            tech8: styled,
            tech9: node,
        },
        {
            img: allison,
            title: 'Project V',
            description: 'Backend',
            tech: html,
            tech1: css,
            tech2: javas,
            tech3: type,
            tech4: react,
            tech5: docker,
            tech6: framer,
            tech7: git,
            tech8: mongo,
            tech9: styled,
            tech10: mui,
            tech11: node,
            tech12: postgres,
        },
    ]
    //const imagesGrouped = chunk(projects, 3) // Agrupamos los elementos en sub-arreglos de tres
    const imagesGroupedMobile = chunk(projects, 1)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize() // inicializa el estado en función del ancho actual
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <MainContainer>
            <Container>
                <TitleContainer>
                    <Title>Freelancer Projects</Title>
                </TitleContainer>
                <Container>
                    <Carousel
                        interval={5000}
                        navButtonsAlwaysVisible={true}
                        indicators={false}
                        index={1}
                        height={500}
                        fullHeightHover={true}
                        cycleNavigation={true}
                        animation='slide'
                        sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
                        navButtonsWrapperProps={{
                            style: {
                                marginRight: '100px',
                                marginLeft: '100px',
                                ...(isMobile && {
                                    position: 'absolute',
                                    // marginRight: '120px',
                                    // marginLeft: '120px',
                                    // marginTop: '10px',
                                    top: '130px',



                                    // Estilos específicos para pantallas menores de 600px
                                    // Agrega aquí las propiedades específicas para pantallas móviles
                                }),
                            }
                        }}
                        navButtonsProps={{
                            style: {
                                // Estilos adicionales para los botones (next y prev)
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ejemplo de fondo transparente
                                // Añade otros estilos según tus necesidades
                            },
                        }}
                    >
                        {projects.map((item: any, index: any) => (
                            <ImageContainer key={index}>
                                <ImgColombia src={item.img} />
                            </ImageContainer>
                        ))}
                    </Carousel>
                </Container>
            </Container>
        </MainContainer>
    )
}

export default memo(FreelanceProjects)
