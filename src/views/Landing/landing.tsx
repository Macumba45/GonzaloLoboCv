import { FC, memo } from 'react'
import NavBar from '../../components/NavBar'
import MySelfComp from '../../components/Myself'
import WhoIAmComp from '../../components/WhoIAm'
import DividerWithChip from '../../components/Divider'
import EducationComp from '../../components/Education'
import WorkComp from '../../components/Work'
import EntrepreneurComp from '../../components/Entrepreneur'
import SkillsComp from '../../components/Skills'
import BootcampProjects from '../../components/BootCampProjects'
import FreelanceProjects from '../../components/FreelancerProjects'

const Landing: FC = () => {
    return (
        <>
            <NavBar />
            <MySelfComp />
            <DividerWithChip label="Know me more" />
            <WhoIAmComp />
            <DividerWithChip label="My Education" />
            <EducationComp />
            <DividerWithChip label="Work Experiences" />
            <WorkComp />
            <DividerWithChip label="Entrepreneurship" />
            <EntrepreneurComp />
            <DividerWithChip label="Skills" />
            <SkillsComp />
            <DividerWithChip label="BootCamp Projects" />
            <BootcampProjects />
            <DividerWithChip label="Freelancer Projects" />
            <FreelanceProjects />
        </>
    )
}

export default memo(Landing)
