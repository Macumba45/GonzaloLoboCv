import { FC, memo } from 'react'
import {
    WorkContainerAll,
    WorkContainer,
    WorkDate,
    WorkSubTitle,
    WorkTitle,
    MainContainer,
    Title,
    TitleContainer,
    ImgColombia,
    WorkContainerLogo,
} from './styles'
import HoverMotion from '../../animations/hover'

const azcatec = require('../../assets/azcatec.png')
const myhixel = require('../../assets/myhixel.webp')
const ramirez = require('../../assets/ramirez.png')

const WorkComp: FC = () => {
    return (
        <MainContainer id="work-experiences" className='work-experiences'>
            <TitleContainer>
                <Title>Job Exp</Title>
            </TitleContainer>

            <WorkContainerAll>
                <HoverMotion>
                    <WorkContainer>
                        <WorkContainerLogo>
                            <ImgColombia src={myhixel} />
                        </WorkContainerLogo>
                        <WorkTitle>
                            International Logistics {<br />} & Customer Service.
                            <WorkSubTitle>MYHIXEL</WorkSubTitle>
                            <WorkDate>(September 2021 - October 2022)</WorkDate>
                        </WorkTitle>
                    </WorkContainer>
                </HoverMotion>
                <HoverMotion>
                    <WorkContainer>
                        <WorkContainerLogo>
                            <ImgColombia src={azcatec} />
                        </WorkContainerLogo>
                        <WorkTitle>
                            International {<br />} Business Developer.
                            <WorkSubTitle>AZCATEC</WorkSubTitle>
                            <WorkDate>(March 2021 - June 2021)</WorkDate>
                        </WorkTitle>
                    </WorkContainer>
                </HoverMotion>
                <HoverMotion>
                    <WorkContainer>
                        <WorkContainerLogo>
                            <ImgColombia src={ramirez} />
                        </WorkContainerLogo>
                        <WorkTitle>
                            Wealth management {<br />} & control
                            <WorkSubTitle>Ramirez Mota CB</WorkSubTitle>
                            <WorkDate>(2015 - Nowadays)</WorkDate>
                        </WorkTitle>
                    </WorkContainer>
                </HoverMotion>
            </WorkContainerAll>
        </MainContainer>
    )
}

export default memo(WorkComp)
