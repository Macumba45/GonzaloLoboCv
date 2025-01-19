import { FC, memo } from 'react'
import {
    Description,
    DescriptionContainer,
    MainContainer,
    SpanBold,
} from './styles'

const WhoIAmComp: FC = () => {
    return (
        <MainContainer>
            <DescriptionContainer>
                <Description>
                    I'm Gonzalo, a web developer specialized in creating
                    high-quality applications. My tech stack includes{' '}
                    <SpanBold>
                        React, NextJS, TypeScript, HTML, CSS, and JavaScript for frontend
                        development, complemented with NodeJS, MongoDB, Firebase, and PostgreSQL
                        for backend solutions
                    </SpanBold>
                    . I'm proficient with modern development tools like{' '}
                    <SpanBold>
                        Docker, Git, and UI frameworks such as MUI and Framer
                    </SpanBold>.
                </Description>
                <Description>
                    Currently, I'm working at <SpanBold>Aljamir Digital Solutions</SpanBold>{' '}
                    where I've developed applications for <SpanBold>Grupo Aire</SpanBold> and
                    lead the development of the <SpanBold>Honest ecosystem - including
                        the main platform, customer app, and driver application</SpanBold>.
                    This experience has strengthened my expertise in creating
                    interconnected applications and managing complex user interfaces.
                </Description>
                <Description>
                    With a background in finance and international business management,
                    I bring a unique perspective to software development. I'm passionate
                    about <SpanBold>creating solutions that combine technical excellence
                        with business value</SpanBold>. I'm always eager to take on new
                    challenges and contribute to innovative projects. Let's connect and
                    discuss how I can add value to your team.
                </Description>
            </DescriptionContainer>
        </MainContainer>
    )
}

export default memo(WhoIAmComp)
