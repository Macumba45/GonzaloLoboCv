import { FC, memo } from 'react'
import HoverMotion from '../../animations/hover'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import AddReactionIcon from '@mui/icons-material/AddReaction'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import {
    MainContainer,
    SkillsContainer,
    SkillsContainerIndividual,
    SofSkillsDescription,
    Title,
    TitleContainer,
} from './styles'


const SoftSkills: FC = () => {
    return (
        <MainContainer id="soft-skills" className='soft-skills'>
            <TitleContainer>
                <Title>Soft Skills</Title>
            </TitleContainer>
            <SkillsContainer>
                <HoverMotion>
                    <SkillsContainerIndividual>
                        <AccessTimeIcon sx={{ fontSize: '5rem' }} />
                        <SofSkillsDescription>Time Management</SofSkillsDescription>
                    </SkillsContainerIndividual>
                </HoverMotion>

                <HoverMotion>
                    <SkillsContainerIndividual>
                        <ConnectWithoutContactIcon sx={{ fontSize: '5rem' }} />
                        <SofSkillsDescription>Communication</SofSkillsDescription>
                    </SkillsContainerIndividual>
                </HoverMotion>

                <HoverMotion>
                    <SkillsContainerIndividual>
                        <AddReactionIcon sx={{ fontSize: '5rem' }} />
                        <SofSkillsDescription>Adaptability</SofSkillsDescription>
                    </SkillsContainerIndividual>
                </HoverMotion>

                <HoverMotion>
                    <SkillsContainerIndividual>
                        <Diversity3Icon sx={{ fontSize: '5rem' }} />
                        <SofSkillsDescription>Teamwork skills</SofSkillsDescription>
                    </SkillsContainerIndividual>
                </HoverMotion>

                <HoverMotion>
                    <SkillsContainerIndividual>
                        <EmojiObjectsIcon sx={{ fontSize: '5rem' }} />
                        <SofSkillsDescription>Problem-solving</SofSkillsDescription>
                    </SkillsContainerIndividual>
                </HoverMotion>

                <HoverMotion>
                    <SkillsContainerIndividual>
                        <FollowTheSignsIcon sx={{ fontSize: '5rem' }} />
                        <SofSkillsDescription>Leadership</SofSkillsDescription>
                    </SkillsContainerIndividual>
                </HoverMotion>

                <HoverMotion>
                    <SkillsContainerIndividual>
                        <ThumbUpAltIcon sx={{ fontSize: '5rem' }} />
                        <SofSkillsDescription>Interpersonal skills</SofSkillsDescription>
                    </SkillsContainerIndividual>
                </HoverMotion>
            </SkillsContainer>
        </MainContainer>

    )
}

export default memo(SoftSkills)
