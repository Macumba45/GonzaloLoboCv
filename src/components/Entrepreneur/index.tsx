import { FC, memo } from 'react'
import {
    EntrepreContainerAll,
    EntrepreContainer,
    EntrepreDate,
    EntrepreSubTitle,
    EntrepreTitle,
    MainContainer,
    Title,
    TitleContainer,
    ImgColombia,
    EntrepreContainerLogo,
    FlagColombia,
} from './styles'

const colombia = require('../../assets/colombia.png')
const azcatec = require('../../assets/exit.jpeg')
const myhixel = require('../../assets/2nait.jpeg')
const ramirez = require('../../assets/nafas.jpeg')

const EntrepreneurComp: FC = () => {
    return (
        <MainContainer>
            <TitleContainer>
                <Title>Entrepreneur</Title>
            </TitleContainer>

            <EntrepreContainerAll>
                <EntrepreContainer>
                    <EntrepreContainerLogo>
                        <ImgColombia src={myhixel} />
                    </EntrepreContainerLogo>
                    <EntrepreTitle>
                        2NAIT APP
                        <EntrepreSubTitle>CEO & Co-founder</EntrepreSubTitle>
                        <EntrepreDate>(2015 - 2018)</EntrepreDate>
                    </EntrepreTitle>
                </EntrepreContainer>
                <EntrepreContainer>
                    <EntrepreContainerLogo>
                        <ImgColombia src={azcatec} />
                    </EntrepreContainerLogo>
                    <EntrepreTitle>
                        EXIT APP <FlagColombia src={colombia} />
                        <EntrepreSubTitle>Co-founder</EntrepreSubTitle>
                        <EntrepreDate>(2017 - 2018)</EntrepreDate>
                    </EntrepreTitle>
                </EntrepreContainer>
                <EntrepreContainer>
                    <EntrepreContainerLogo>
                        <ImgColombia src={ramirez} />
                    </EntrepreContainerLogo>

                    <EntrepreTitle>
                        NAFAS - Sishas <FlagColombia src={colombia} />
                        <EntrepreSubTitle>Co-founder</EntrepreSubTitle>
                        <EntrepreDate>(2019 - 2020)</EntrepreDate>
                    </EntrepreTitle>
                </EntrepreContainer>
            </EntrepreContainerAll>
        </MainContainer>
    )
}

export default memo(EntrepreneurComp)
