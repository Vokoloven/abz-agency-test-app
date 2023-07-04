import { Container } from 'components/Container';
import { Box } from 'components/Box';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';

export const Header = () => {
    return (
        <Box bg={'white'}>
            <Container as={'header'}>
                <Box
                    py={13}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={{ tablet: 'space-between' }}
                >
                    <Logo mr={14} />
                    <Box display={'flex'}>
                        {['Users', 'Sign up'].map((name, index) => (
                            <Box
                                key={name}
                                as={'a'}
                                href={`#${name
                                    .replace(/\s/g, '')
                                    .toLowerCase()}`}
                            >
                                <Button
                                    variant={'primary'}
                                    mr={index === 0 && { mr: 10 }}
                                    aria-label={name}
                                >
                                    {name}
                                </Button>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
