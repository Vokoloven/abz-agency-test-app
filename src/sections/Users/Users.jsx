import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { Container } from 'components/Container';
import { Typography } from 'components/Typography';
import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { Spinner } from 'components/Spinner';
import { getUsers } from 'redux/service';
import { useUserFilter } from 'hooks/useUserFilter';
import { useDispatch } from 'react-redux';

export const Users = () => {
    const dispatch = useDispatch();

    const {
        loading,
        newUser,
        usersList: { total_pages, page },
    } = useSelector(selectUsers);
    const filteredUsers = useUserFilter();

    const handleClick = () => {
        if (page <= total_pages) {
            dispatch(
                getUsers({
                    params: {
                        page: newUser ? 1 : page + 1,
                        count: '6',
                    },
                })
            );
        }
    };

    return (
        <Container
            bg={'background'}
            py={140}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            id={'users'}
        >
            <Typography
                as={'h2'}
                variant={'heading'}
                textAlign={'center'}
                align={'bottom'}
                mb={50}
                sx={{ whiteSpace: 'pre-wrap' }}
            >
                Working with GET request
            </Typography>
            {filteredUsers?.length > 0 && (
                <Box
                    width={'100%'}
                    display={'grid'}
                    gridGap={{ mobile: 5, tablet: 4, laptop: 29 }}
                    gridTemplateColumns={{
                        mobile: '1fr',
                        tablet: '1fr 1fr',
                        laptop: '1fr 1fr 1fr',
                        desktopS: '370px 370px 370px',
                    }}
                >
                    {filteredUsers?.map((item) => (
                        <Card props={item} key={item.id} />
                    ))}
                </Box>
            )}
            <Spinner loading={loading} sx={{ marginTop: 50 }} />
            {loading !== 'pending' && (
                <Button
                    variant={'primary'}
                    ariaLabel={'Show more'}
                    mt={50}
                    minWidth={120}
                    onClick={handleClick}
                    sx={{ ...(total_pages === page && { display: 'none' }) }}
                >
                    Show more
                </Button>
            )}
        </Container>
    );
};
