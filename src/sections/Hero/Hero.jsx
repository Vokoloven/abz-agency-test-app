import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { Typography } from 'components/Typography'
import { Background } from './Background'
import { Box } from 'components/Box'

export const Hero = () => {
    return (
        <Container p={{ mobile: 0, tablet: 0, laptop: 0, desktop: 0 }}>
            <Background>
                <Container
                    pt={40}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >
                    <Typography
                        as={'h1'}
                        variant={'heading'}
                        color={'white'}
                        textAlign={'center'}
                    >
                        Test assignment for front-end developer
                    </Typography>
                    <Typography
                        as={'p'}
                        variant={'body'}
                        color={'white'}
                        mt={21}
                        textAlign={'center'}
                    >
                        What defines a good front-end developer is one that has
                        skilled knowledge of HTML, CSS, JS with a vast
                        understanding of User design thinking as they'll be
                        building web interfaces with accessibility in mind. They
                        should also be excited to learn, as the world of
                        Front-End Development keeps evolving.
                    </Typography>
                    <Box as={'a'} href={`#signup`}>
                        <Button
                            variant={'primary'}
                            mt={36}
                            aria-label={'Sign Up'}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Container>
            </Background>
        </Container>
    )
}
