import { Form } from 'components/Form'
import { Container } from 'components/Container'
import { Typography } from 'components/Typography'

export const Request = () => {
    return (
        <Container bg={'background'}>
            <Typography
                as={'h2'}
                variant={'heading'}
                mb={50}
                textAlign={'center'}
            >
                Working with POST request
            </Typography>
            <Form />
        </Container>
    )
}
