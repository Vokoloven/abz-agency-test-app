import { Container } from 'components/Container'
import { Box } from 'components/Box'
import { Logo } from 'components/Logo'
import { Button } from 'components/Button'

export const Header = () => {
    return (
        <Container as={'header'}>
            <Box py={13} display={'flex'} alignItems={'center'}>
                <Logo mr={14} />
                {['Users', 'Sign up'].map((name, index) => (
                    <Button
                        key={name + index}
                        variant={'primary'}
                        mr={index === 0 && { mr: 14 }}
                        aria-label={name}
                    >
                        {name}
                    </Button>
                ))}
            </Box>
        </Container>
    )
}
