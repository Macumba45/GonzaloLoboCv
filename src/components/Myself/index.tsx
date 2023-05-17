import { FC, memo } from 'react'
import {
    MainContainer,
    Name,
    NameContainer,
    Picture,
    PictureContainer,
    StudiesContainer,
    StudiesTitles,
} from './styles'
const picture = require('../../assets/yo1.png')

const MySelfComp: FC = () => {
    return (
        <MainContainer>
            <PictureContainer>
                <Picture src={picture} />
            </PictureContainer>
            <NameContainer>
                <Name>Gonzalo Lobo</Name>
            </NameContainer>
            <StudiesContainer>
                <StudiesTitles>Full Stack Developer MERN</StudiesTitles>
                <StudiesTitles>International Business & Trade</StudiesTitles>
                <StudiesTitles>Financial & Account Graduate</StudiesTitles>
            </StudiesContainer>
        </MainContainer>
    )
}

export default memo(MySelfComp)
