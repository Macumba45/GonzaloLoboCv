import { FC, memo } from 'react'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import {
    EducationContainerAll,
    EducationContainer,
    EducationDate,
    EducationSubTitle,
    EducationTitle,
    MainContainer,
    Title,
    TitleContainer,
    ImgColombia,
} from './styles'
import HoverMotion from '../../animations/hover'

const colombia = require('../../assets/colombia.png')

const EducationComp: FC = () => {
    return (
        <MainContainer id="education" className='Education'>
            <TitleContainer>
                <Title>Education</Title>
            </TitleContainer>

            <EducationContainerAll>
                <HoverMotion>
                    <EducationContainer>
                        <DeveloperModeIcon
                            sx={{ fontSize: '4rem', marginBottom: '2rem' }}
                        />
                        <EducationTitle>
                            BootCamp {<br />} Full Stack Developer.
                            <EducationSubTitle>
                                The Bridge School.
                            </EducationSubTitle>
                            <EducationDate>
                                (October 2022 - April 2023)
                            </EducationDate>
                        </EducationTitle>
                    </EducationContainer>
                </HoverMotion>
                <HoverMotion>
                    <EducationContainer>
                        <WorkIcon sx={{ fontSize: '4rem', marginBottom: '2rem' }} />
                        <EducationTitle>
                            International {<br />} Business & Trade.
                            <EducationSubTitle>
                                Business School, ESIC
                            </EducationSubTitle>
                            <EducationDate>
                                (September 2020 - June 2021)
                            </EducationDate>
                        </EducationTitle>
                    </EducationContainer>
                </HoverMotion>
                <HoverMotion>
                    <EducationContainer>
                        <SchoolIcon
                            sx={{ fontSize: '4rem', marginBottom: '2rem' }}
                        />
                        <EducationTitle>
                            Graduate {<br />} Accounting & Finances.
                            <EducationSubTitle>
                                Universidad de Sevilla & ICESI{' '}
                                <ImgColombia src={colombia} />
                            </EducationSubTitle>
                            <EducationDate>
                                (September 2012 - June 2018)
                            </EducationDate>
                        </EducationTitle>
                    </EducationContainer>
                </HoverMotion>
            </EducationContainerAll>
        </MainContainer>
    )
}

export default memo(EducationComp)
