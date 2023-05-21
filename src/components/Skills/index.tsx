import { FC, memo, useEffect } from 'react'
import HoverMotion from '../../animations/hover'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {
    SkillsContainerAll,
    SkillsContainer,
    MainContainer,
    Title,
    TitleContainer,
    ImgColombia,
    SkillsContainerLogo,
} from './styles'



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

    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.0,
        triggerOnce: true,
    })

    const getRandomPosition = () => {
        // Generate a random position within a range
        const min = 0;
        const max = -100;
        return Math.random() * (max - min) + min;
    };

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 4, type: 'spring', bounce: 0.2 }, // Personaliza la animación según tus necesidades
            });
        }
    }, [controls, inView]);
    return (
        <MainContainer >
            <TitleContainer>
                <Title>Skills</Title>
            </TitleContainer>
            <SkillsContainerAll>
                <SkillsContainer>
                    <SkillsContainerLogo id="skills" className='skills' >
                        {Object.keys(skills).map((skill, index) => (
                            <HoverMotion key={index}>
                                <motion.div
                                    key={index}
                                    ref={ref} // Aplica el ref del hook useInView a cada imagen
                                    initial={{ opacity: 0, x: getRandomPosition(), y: getRandomPosition() }}
                                    animate={controls}
                                >
                                    <ImgColombia
                                        key={index}
                                        src={skills[skill]}
                                        alt={skill}
                                    />
                                </motion.div>
                            </HoverMotion>
                        ))}
                    </SkillsContainerLogo>
                </SkillsContainer>
            </SkillsContainerAll>
        </MainContainer>
    )
}

export default memo(SkillsComp)
