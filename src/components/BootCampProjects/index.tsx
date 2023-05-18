import { FC, memo, useEffect, useState } from 'react'
import { chunk } from 'lodash'
import {
    SkillsContainerAll,
    SkillsContainer,
    MainContainer,
    Title,
    TitleContainer,
    ImgColombia,
    SkillsContainerLogo,
    ContainerProject,
    TitleProject,
    ProjectDescription,
    ContainerProjectTitle,
    ContainerProjectDescription,
    ImgTech,
    ContainerTech,
} from './styles'

import {
    Accordion,
    AccordionDetails,
    Button,
} from '@mui/material'

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

interface Skills {
    [key: string]: any
}

const skills: Skills = {
    paul: {
        img: paul,
        title: 'Project I',
        description: 'Project developed using HTML & CSS',
        tech: html,
        tech1: css,
    },
    brenes: {
        img: brenes,
        title: 'Project II',
        description: 'Project developed using JavaScript Vanilla',
        tech: html,
        tech1: css,
        tech2: javas,
        tech3: firebase,
    },
    nasa: {
        img: nasa,
        title: 'Project III',
        description:
            'Project developed using React, Styled-Components, NodeJS, and PostgreSQL',
        tech: html,
        tech1: css,
        tech2: javas,
        tech3: type,
        tech4: react,
        tech5: docker,
        tech6: git,
        tech7: mongo,
        tech8: styled,
        tech9: node,
        tech10: postgres,
    },
    rick: {
        img: rick,
        title: 'Project IV',
        description: 'Backend',
        tech: html,
        tech1: css,
        tech2: javas,
        tech3: type,
        tech4: react,
        tech5: docker,
        tech6: git,
        tech7: mongo,
        tech8: styled,
        tech9: node,
        tech10: postgres,
    },
    cocktails: {
        img: cocktails,
        title: 'Project V',
        description: 'Backend',
        tech: html,
        tech1: css,
        tech2: javas,
        tech3: type,
        tech4: firebase,
        tech5: react,
        tech6: docker,
        tech7: framer,
        tech8: git,
        tech9: mongo,
        tech10: styled,
        tech11: mui,
        tech12: node,
        tech13: postgres,
    },
    inversor: {
        img: inversor,
        title: 'Project VI',
        description: 'Backend',
        tech: html,
        tech1: css,
        tech2: javas,
        tech3: type,
        tech4: firebase,
        tech5: react,
        tech6: docker,
        tech7: framer,
        tech8: git,
        tech9: mongo,
        tech10: styled,
        tech11: mui,
        tech12: node,
        tech13: postgres,
    },
}

const TechAccordion = ({ techs }: any) => {
    const [expanded, setExpanded] = useState(false)
    const [isMobile, setIsMobile] = useState(false)


    const handleAccordionChange = () => {
        setExpanded(!expanded)
    }
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize() // inicializa el estado en función del ancho actual
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Accordion
            sx={{
                backgroundColor: '#a2a2a2',
                width: '280px',
                display: 'flex',
                flexDirection: 'column',
                margin: '0 auto',
            }}
            expanded={expanded}
            onChange={handleAccordionChange}
        >
            <Button
                sx={{
                    backgroundColor: 'black',
                    '&:hover': {
                        backgroundColor: 'black', // Cambia este valor por el color deseado
                    },
                }} variant="contained"
                onClick={handleAccordionChange}
            >
                Techs used
            </Button>
            <AccordionDetails>
                <ContainerTech>
                    {techs.map((tech: any, index: any) => (
                        <ImgTech key={index} src={tech} />
                    ))}
                </ContainerTech>
            </AccordionDetails>
        </Accordion>
    )
}

const BootcampProjects: FC = () => {
    return (
        <MainContainer>
            <TitleContainer>
                <Title>BootCamp Projects</Title>
            </TitleContainer>
            <SkillsContainerAll>
                <SkillsContainer>
                    <SkillsContainerLogo>
                        {Object.keys(skills).map((skill, index) => (
                            <ContainerProject key={index}>
                                <ContainerProjectTitle>
                                    <TitleProject>
                                        {skills[skill].title}
                                    </TitleProject>
                                </ContainerProjectTitle>
                                <ImgColombia
                                    src={skills[skill].img}
                                    alt={skill}
                                />
                                <ContainerProjectDescription>
                                    <ProjectDescription>
                                        <TechAccordion
                                            techs={[
                                                skills[skill].tech,
                                                skills[skill].tech1,
                                                skills[skill].tech2,
                                                skills[skill].tech3,
                                                skills[skill].tech4,
                                                skills[skill].tech5,
                                                skills[skill].tech6,
                                                skills[skill].tech7,
                                                skills[skill].tech8,
                                                skills[skill].tech9,
                                                skills[skill].tech10,
                                                skills[skill].tech11,
                                                skills[skill].tech12,
                                                skills[skill].tech13,
                                            ]}
                                        />
                                    </ProjectDescription>
                                </ContainerProjectDescription>
                            </ContainerProject>
                        ))}
                    </SkillsContainerLogo>
                </SkillsContainer>
            </SkillsContainerAll>
        </MainContainer>
    )
}

export default memo(BootcampProjects)
