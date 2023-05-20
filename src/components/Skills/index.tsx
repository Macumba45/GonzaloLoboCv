import { FC, memo } from 'react'
import {
    SkillsContainerAll,
    SkillsContainer,
    MainContainer,
    Title,
    TitleContainer,
    ImgColombia,
    SkillsContainerLogo,
} from './styles'
import HoverMotion from '../../animations/hover'

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
    html: html,
    css: css,
    javascript: javas,
    typescript: type,
    firebase: firebase,
    react: react,
    docker: docker,
    framer: framer,
    git: git,
    mongo: mongo,
    styled: styled,
    mui: mui,
    node: node,
    postgres: postgres,
}

const SkillsComp: FC = () => {
    return (
        <MainContainer id="skills" className='skills'>
            <TitleContainer>
                <Title>Skills</Title>
            </TitleContainer>
            <SkillsContainerAll>
                <SkillsContainer>
                    <SkillsContainerLogo>
                        {Object.keys(skills).map((skill, index) => (
                            <HoverMotion key={index}>
                                <ImgColombia
                                    key={index}
                                    src={skills[skill]}
                                    alt={skill}
                                />
                            </HoverMotion>
                        ))}
                    </SkillsContainerLogo>
                </SkillsContainer>
            </SkillsContainerAll>
        </MainContainer>
    )
}

export default memo(SkillsComp)
