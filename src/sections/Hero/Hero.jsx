import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Typography } from 'components/Typography';
import { Box } from 'components/Box';
import { Background } from './Background';
import { useLazyBackground } from 'hooks/useLazyBackground';
import image from 'assets/pexels-alexandr-podvalny-1227513.webp';

const Hero = () => {
    const src = useLazyBackground(image);

    return (
        <Container p={{ mobile: 0, tablet: 0, laptop: 0, desktop: 0 }}>
            <Background src={src}>
                <Container
                    pt={{ mobile: 40, tablet: 89, laptop: 164 }}
                    px={{ mobile: 16, tablet: 194, laptop: 322, desktopS: 395 }}
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
                            mt={32}
                            aria-label={'Sign Up'}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Container>
            </Background>
        </Container>
    );
};

export default Hero;
