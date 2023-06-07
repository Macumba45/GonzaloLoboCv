import { FC, memo } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Link } from '@mui/material'
import {
    ContainerDesign,
    ContainerLogos,
    DesignedBy,
    MainContainer,
} from './styles'
import HoverMotion from '../../animations/hover'

const FooterComp: FC = () => {
    return (
        <MainContainer>
            <ContainerLogos>
                <HoverMotion>
                    <Link
                        href="https://github.com/Macumba45/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon
                            sx={{
                                color: 'white',
                                fontSize: '3rem',
                                margin: 2,
                                cursor: 'pointer',
                            }}
                        />
                    </Link>
                </HoverMotion>
                <HoverMotion>
                    <Link
                        href="https://www.linkedin.com/in/gonzalolr15/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon
                            sx={{
                                color: 'white',
                                fontSize: '3rem',
                                margin: 2,
                                cursor: 'pointer',
                            }}
                        />
                    </Link>
                </HoverMotion>
            </ContainerLogos>
            <ContainerDesign>
                <DesignedBy
                    target="blank"
                    href="https://gonzalolobocv.vercel.app/"
                >
                    Designed by Macumba
                </DesignedBy>
            </ContainerDesign>
        </MainContainer>
    )
}

export default memo(FooterComp)
