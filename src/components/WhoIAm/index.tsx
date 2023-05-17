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
            <TitleContainer>
                <Title>Who am i?</Title>
            </TitleContainer>
            <DescriptionContainer>
                <Description>
                    I would like to introduce myself as a{' '}
                    <SpanBold>Junior Full Stack Developer</SpanBold> with a
                    great learning capacity. I have experience developing web
                    FrontEnd applications using technologies such as{' '}
                    <SpanBold>
                        {' '}
                        JavaScript,HTML, CSS, Styled-Components & frameworks
                        such as React.
                    </SpanBold>{' '}
                    I also have experience developing back-end applications
                    using languages like{' '}
                    <SpanBold>
                        Node.js, & frameworks such as Express & Docker.
                    </SpanBold>
                </Description>
                <Description>

                    I am always looking for<SpanBold> new challenges to continue growing
                        professionally and i am willing to work as a team and
                        collaborate with my co-workers to achieve the company's
                        goals.</SpanBold> My focus is always to provide high quality service
                    and meet customer expectations.<SpanBold> I am sure that my experience
                        and skills would be of great benefit to your company.</SpanBold>
                </Description>
            </DescriptionContainer>
        </MainContainer>
    )
}

export default memo(WhoIAmComp)
