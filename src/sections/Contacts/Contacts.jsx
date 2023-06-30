import { Button } from 'components/Button'
import { Card } from 'components/Card'
import { Container } from 'components/Container'
import { Typography } from 'components/Typography'
import { Box } from 'components/Box'

export const Contacts = () => {
    const test = [
        {
            name: 'Salvador Stewart Flynn Thomas',
            rank: 'Frontend Developer Frontend',
            email: 'frontend_develop@gmail.com',
            phone: '+38 (098) 278 44 24',
        },
        {
            name: 'Salvador Stewart Flynn Thozas',
            rank: 'Frontend Developer Frontend',
            email: 'frontend_develop@gmail.com',
            phone: '+38 (098) 278 44 24',
        },
        {
            name: 'Salvador Stewart Flynn Thsmas',
            rank: 'Frontend Developer Frontend',
            email: 'frontend_develop@gmail.com',
            phone: '+38 (098) 278 44 24',
        },
    ]

    return (
        <Container
            bg={'background'}
            py={140}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
        >
            <Typography
                as={'h2'}
                variant={'heading'}
                textAlign={'center'}
                mb={50}
            >
                Working with GET request
            </Typography>
            <Box
                display={'grid'}
                gridGap={5}
                gridTemplateColumns={'1fr'}
                width={'100%'}
            >
                {test.map((item) => (
                    <Card props={item} key={item.name} />
                ))}
            </Box>
            <Button
                variant={'primary'}
                ariaLabel={'Show more'}
                mt={50}
                minWidth={120}
            >
                Show more
            </Button>
        </Container>
    )
}
