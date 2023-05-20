import { FC, memo, useEffect } from 'react'
import HoverMotion from '../../animations/hover'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import AddReactionIcon from '@mui/icons-material/AddReaction'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {
    MainContainer,
    SkillsContainer,
    SkillsContainerIndividual,
    SofSkillsDescription,
    Title,
    TitleContainer,
} from './styles'


const SoftSkills: FC = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.00,
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
                transition: { duration: 2, type: 'spring', bounce: 0.2 }, // Personaliza la animación según tus necesidades
            });
        }
    }, [controls, inView]);

    return (
        <MainContainer id="soft-skills" className='soft-skills'>
            <TitleContainer>
                <Title>Soft Skills</Title>
            </TitleContainer>
            <SkillsContainer>
                <HoverMotion>
                    <motion.div
                        ref={ref} // Aplica el ref del hook useInView a cada imagen
                        initial={{ opacity: 0, x: getRandomPosition(), y: getRandomPosition() }}
                        animate={controls}
                    >
                        <SkillsContainerIndividual>
                            <AccessTimeIcon sx={{ fontSize: '5rem' }} />
                            <SofSkillsDescription>Time Management</SofSkillsDescription>
                        </SkillsContainerIndividual>
                    </motion.div>
                </HoverMotion>
                <HoverMotion>
                    <motion.div
                        ref={ref} // Aplica el ref del hook useInView a cada imagen
                        initial={{ opacity: 0, x: getRandomPosition(), y: getRandomPosition() }}
                        animate={controls}
                    >
                        <SkillsContainerIndividual>
                            <ConnectWithoutContactIcon sx={{ fontSize: '5rem' }} />
                            <SofSkillsDescription>Communication</SofSkillsDescription>
                        </SkillsContainerIndividual>
                    </motion.div>
                </HoverMotion>
                <HoverMotion>
                    <motion.div
                        ref={ref} // Aplica el ref del hook useInView a cada imagen
                        initial={{ opacity: 0, x: getRandomPosition(), y: getRandomPosition() }}
                        animate={controls}
                    >
                        <SkillsContainerIndividual>
                            <AddReactionIcon sx={{ fontSize: '5rem' }} />
                            <SofSkillsDescription>Adaptability</SofSkillsDescription>
                        </SkillsContainerIndividual>
                    </motion.div>
                </HoverMotion>
                <HoverMotion>
                    <motion.div
                        ref={ref} // Aplica el ref del hook useInView a cada imagen
                        initial={{ opacity: 0, x: getRandomPosition(), y: getRandomPosition() }}
                        animate={controls}
                    >
                        <SkillsContainerIndividual>
                            <Diversity3Icon sx={{ fontSize: '5rem' }} />
                            <SofSkillsDescription>Teamwork skills</SofSkillsDescription>
                        </SkillsContainerIndividual>
                    </motion.div>
                </HoverMotion>
                <HoverMotion>
                    <motion.div
                        ref={ref} // Aplica el ref del hook useInView a cada imagen
                        initial={{ opacity: 0, x: getRandomPosition(), y: getRandomPosition() }}
                        animate={controls}
                    >
                        <SkillsContainerIndividual>
                            <EmojiObjectsIcon sx={{ fontSize: '5rem' }} />
                            <SofSkillsDescription>Problem-solving</SofSkillsDescription>
                        </SkillsContainerIndividual>
                    </motion.div>
                </HoverMotion>

                <HoverMotion>
                    <motion.div
                        ref={ref} // Aplica el ref del hook useInView a cada imagen
                        initial={{ opacity: 0, x: getRandomPosition(), y: getRandomPosition() }}
                        animate={controls}
                    >
                        <SkillsContainerIndividual>
                            <FollowTheSignsIcon sx={{ fontSize: '5rem' }} />
                            <SofSkillsDescription>Leadership</SofSkillsDescription>
                        </SkillsContainerIndividual>
                    </motion.div>
                </HoverMotion>

                <HoverMotion>
                    <motion.div
                        ref={ref} // Aplica el ref del hook useInView a cada imagen
                        initial={{ opacity: 0, x: getRandomPosition(), y: getRandomPosition() }}
                        animate={controls}
                    >
                        <SkillsContainerIndividual>
                            <ThumbUpAltIcon sx={{ fontSize: '5rem' }} />
                            <SofSkillsDescription>Interpersonal skills</SofSkillsDescription>
                        </SkillsContainerIndividual>
                    </motion.div>
                </HoverMotion>
            </SkillsContainer>
        </MainContainer>

    )
}

export default memo(SoftSkills)
