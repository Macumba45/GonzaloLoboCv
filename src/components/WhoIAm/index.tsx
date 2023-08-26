import { FC, memo } from 'react'
import {
    Description,
    DescriptionContainer,
    MainContainer,
    SpanBold,
    Title,
    TitleContainer,
} from './styles'

const WhoIAmComp: FC = () => {
    return (
        <MainContainer>
            <DescriptionContainer>
                <Description>
                    I'm Gonzalo, a web developer passionate about creating
                    high-quality applications. I specialize in front-end
                    technologies like{' '}
                    <SpanBold>
                        {' '}
                        React, NextJS, HTML, CSS, and JavaScript, as well as
                        back-end technologies like NodeJS, prisma, MongoDB,
                        Prisma and Postgres{' '}
                    </SpanBold>
                    . I learned technologies like
                    <SpanBold>
                        TypeScript, Firebase, Prisma, Docker, and Git.
                    </SpanBold>{' '}
                    I have also worked with UI design frameworks like{' '}
                    <SpanBold>Framer and MUI.</SpanBold>
                </Description>
                <Description>
                    In addition, I have experience in finance, accounting,
                    trade, and international business management{' '}
                    <SpanBold>
                        {' '}
                        for clients in Spain, Colombia, and the United States.
                    </SpanBold>{' '}
                    I really want to learn new technologies and frameworks. I
                    also stand out for my ability to solve problems and customer
                    orientation.
                </Description>
                <Description>
                    I love working on challenging projects and coming up with
                    creative solutions that help users.{' '}
                    <SpanBold>
                        If you are looking for a highly competent developer with
                        extensive experience in React and other technologies,
                        please do not hesitate to contact me.
                    </SpanBold>{' '}
                    I am excited to explore new job opportunities and use my
                    skills to make a difference in the development industry.
                </Description>
            </DescriptionContainer>
        </MainContainer>
    )
}

export default memo(WhoIAmComp)
