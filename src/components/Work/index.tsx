import { FC, memo } from 'react'
import {
    WorkContainerAll,
    WorkContainer,
    WorkDate,
    WorkSubTitle,
    WorkTitle,
    MainContainer,
    ImgColombia,
    WorkContainerLogo,
} from './styles'
import HoverMotion from '../../animations/hover'

const freelance = require('../../assets/freelance.webp')

const WorkComp: FC = () => {
    return (
        <MainContainer id="job-experiences" className="job-experiences">
            <WorkContainerAll>
                <HoverMotion>
                    <WorkContainer>
                        <WorkContainerLogo>
                            <ImgColombia style={{ width: 220 }} src="https://aqiveo.com/wp-content/uploads/2021/02/Aljamir_Logo.png" />
                        </WorkContainerLogo>
                        <WorkTitle>
                            WebApp developer {<br />} & React Native Developer.
                            <WorkSubTitle>Aljamir S.L</WorkSubTitle>
                            <WorkDate>(2023 - Nowadays)</WorkDate>
                        </WorkTitle>
                    </WorkContainer>
                </HoverMotion>
                <HoverMotion>
                    <WorkContainer>
                        <WorkContainerLogo>
                            <ImgColombia style={{ width: 280 }} src={freelance} />
                        </WorkContainerLogo>
                        <WorkTitle>
                            WebApp developer {<br />} & React Native Developer.
                            <WorkSubTitle>Freelance</WorkSubTitle>
                            <WorkDate>(2023 - Nowadays)</WorkDate>
                        </WorkTitle>
                    </WorkContainer>
                </HoverMotion>
                <HoverMotion>
                    <WorkContainer>
                        <WorkContainerLogo>
                            <ImgColombia src='https://www.medicallogistic.sk/wp-content/uploads/2022/05/slider2-scaled.jpg' />
                        </WorkContainerLogo>
                        <WorkTitle>
                            International Logistics {<br />} & Customer Service.
                            <WorkSubTitle>MEDICAL TECH</WorkSubTitle>
                            <WorkDate>(September 2021 - October 2022)</WorkDate>
                        </WorkTitle>
                    </WorkContainer>
                </HoverMotion>

            </WorkContainerAll>
        </MainContainer>
    )
}

export default memo(WorkComp)
