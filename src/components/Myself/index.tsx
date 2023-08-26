import { FC, memo } from 'react'
import AnimatedTitle from '../../animations/AnimatedTitles'
import {
    ButtonContainer,
    MainContainer,
    Name,
    NameContainer,
    Picture,
    PictureContainer,
    StudiesContainer,
    StudiesTitles,
} from './styles'
import HoverMotion from '../../animations/hover'
import AnimatedSideTitle from '../../animations/AnimatedTitlesSide'
import AnimatedSideTitle2 from '../../animations/AnimatedTitlesSide2'
import ButtonContacto from '../ButtonContacto'
import ButtonCV from '../ButtonCV'
const picture = require('../../assets/yo1.png')

const MySelfComp: FC = () => {
    return (
        <MainContainer>
            <PictureContainer>
                <HoverMotion>
                    <Picture src={picture} />
                </HoverMotion>
            </PictureContainer>
            <NameContainer>
                <AnimatedTitle>
                    <Name>Gonzalo Lobo</Name>
                </AnimatedTitle>
            </NameContainer>
            <StudiesContainer>
                <AnimatedSideTitle>
                    <StudiesTitles>Full Stack Developer</StudiesTitles>
                </AnimatedSideTitle>
                {/* <AnimatedSideTitle2>
                    <StudiesTitles>
                        International Business & Trade
                    </StudiesTitles>
                </AnimatedSideTitle2>
                <AnimatedSideTitle>
                    <StudiesTitles>Financial & Account Graduate</StudiesTitles>
                </AnimatedSideTitle> */}
            </StudiesContainer>
            <ButtonContainer>
                <ButtonContacto title="Contact me" />
                <ButtonCV title="Download CV" />
            </ButtonContainer>
        </MainContainer>
    )
}

export default memo(MySelfComp)
