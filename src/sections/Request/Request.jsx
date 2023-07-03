import { Form } from 'components/Form';
import { Container } from 'components/Container';
import { Typography } from 'components/Typography';
import { StyledSuccessImg } from './style/StyledSuccessImg';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUsers } from 'redux/selectors';
import { Box } from 'components/Box';

export const Request = () => {
    const { loadingPost } = useSelector(selectUsers);

    return (
        <Container bg={'background'} pb={100} id={'signup'}>
            <Typography
                as={'h2'}
                variant={'heading'}
                mb={50}
                textAlign={'center'}
            >
                {loadingPost === 'succeeded'
                    ? 'User successfully registered '
                    : 'Working with POST request'}
            </Typography>
            {loadingPost === 'succeeded' ? (
                <Box display={'flex'} justifyContent={'center'}>
                    <StyledSuccessImg />
                </Box>
            ) : (
                <Form />
            )}
        </Container>
    );
};
