import { FC, memo, useEffect, useState } from 'react'
import TechAccordion from '../AccordionTechs'
import { chunk } from 'lodash'
import {
    MainContainer,
    Title,
    TitleContainer,
    ImgColombia,
    FullWidthCarousel,
    Container,
    ImageContainer,
} from './styles'
import HoverMotion from '../../animations/hover'

const paul = require('../../assets/templates/PAUL.png')
const brenes = require('../../assets/templates/BRENES.png')
const nasa = require('../../assets/templates/NASA.png')
const rick = require('../../assets/templates/RICK.png')
const cocktails = require('../../assets/templates/cocktails.png')
const inversor = require('../../assets/templates/inversor.png')
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

const projects = [
    {
        img: paul,
        title: 'Project I',
        link: 'https://github.com/Macumba45?tab=repositories',
        description: 'Project developed using HTML & CSS',
        tech: html,
        tech1: css,
    },
    {
        img: brenes,
        title: 'Project II',
        link: 'https://github.com/Macumba45?tab=repositories',
        description: 'Project developed using JavaScript Vanilla',
        tech: html,
        tech1: css,
        tech2: javas,
        tech3: firebase,
    },
    {
        img: nasa,
        title: 'Project III',
        link: 'https://github.com/Macumba45?tab=repositories',
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
        img: rick,
        title: 'Project IV',
        link: 'https://github.com/Macumba45?tab=repositories',
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
        img: cocktails,
        title: 'Project V',
        link: 'https://github.com/Macumba45?tab=repositories',
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
    {
        img: inversor,
        title: 'Project VI',
        link: 'https://github.com/Macumba45?tab=repositories',
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

const BootcampProjects: FC = () => {
    const imagesGrouped = chunk(projects, 3) // Agrupamos los elementos en sub-arreglos de tres
    const imagesGroupedMobile = chunk(projects, 1)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 780)
        }
        handleResize() // inicializa el estado en función del ancho actual
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <MainContainer id="bootcamp-projects" className="bootcamp-projects">
            <Container>
                {isMobile ? (
                    <FullWidthCarousel
                        interval={5000}
                        animation={'fade'}
                        swipe={false}
                        navButtonsAlwaysVisible={true}
                        cycleNavigation={true}
                    >
                        {imagesGroupedMobile.map((group, index) => (
                            <Container key={index}>
                                {group.map((item, subIndex) => (
                                    <ImageContainer key={subIndex}>
                                        {item.img && (
                                            <a target="blank" href={item.link}>
                                                <ImgColombia src={item.img} />
                                            </a>
                                        )}
                                        {item.img && (
                                            <TechAccordion
                                                techs={[
                                                    item.tech,
                                                    item.tech1,
                                                    item.tech2,
                                                    item.tech3,
                                                    item.tech4,
                                                    item.tech5,
                                                    item.tech6,
                                                    item.tech7,
                                                    item.tech8,
                                                    item.tech9,
                                                    item.tech10,
                                                    item.tech11,
                                                    item.tech12,
                                                ].filter(Boolean)} // Filtrar las tecnologías para eliminar las que sean falsas (undefined, null, etc.)
                                            />
                                        )}
                                    </ImageContainer>
                                ))}
                            </Container>
                        ))}
                    </FullWidthCarousel>
                ) : (
                    <FullWidthCarousel
                        interval={5000}
                        animation={'fade'}
                        swipe={false}
                        navButtonsAlwaysVisible={true}
                        cycleNavigation={true}
                        navButtonsProps={{
                            style: {
                                // Estilos adicionales para los botones (next y prev)
                                backgroundColor: 'rgba(0, 0, 0, 0.824)', // Ejemplo de fondo transparente
                                // Añade otros estilos según tus necesidades
                            },
                        }}
                        navButtonsWrapperProps={{
                            style: {
                                marginRight: '100px',
                                marginLeft: '100px',
                            },
                        }}
                    >
                        {imagesGrouped.map((group, index) => (
                            <Container key={index}>
                                {group.map((item, subIndex) => (
                                    <ImageContainer key={subIndex}>
                                        {item.img && (
                                            <HoverMotion>
                                                <a
                                                    key={index}
                                                    target="blank"
                                                    href={item.link}
                                                >
                                                    <ImgColombia
                                                        src={item.img}
                                                    />
                                                </a>
                                            </HoverMotion>
                                        )}
                                        {item.img && (
                                            <TechAccordion
                                                techs={[
                                                    item.tech,
                                                    item.tech1,
                                                    item.tech2,
                                                    item.tech3,
                                                    item.tech4,
                                                    item.tech5,
                                                    item.tech6,
                                                    item.tech7,
                                                    item.tech8,
                                                    item.tech9,
                                                    item.tech10,
                                                    item.tech11,
                                                    item.tech12,
                                                ].filter(Boolean)} // Filtrar las tecnologías para eliminar las que sean falsas (undefined, null, etc.)
                                            />
                                        )}
                                    </ImageContainer>
                                ))}
                            </Container>
                        ))}
                    </FullWidthCarousel>
                )}
            </Container>
        </MainContainer>
    )
}

export default memo(BootcampProjects)
