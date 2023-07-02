import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { Container } from 'components/Container';
import { Typography } from 'components/Typography';
import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectUsers } from 'redux/selectors';
import { Spinner } from 'components/Spinner';
import { getUsers } from 'redux/service';
import { useUserFilter } from 'hooks/useUserFilter';
import { useDispatch } from 'react-redux';

export const Users = () => {
    // const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const {
        loading,
        newUser,
        usersList: { total_pages, page },
    } = useSelector(selectUsers);
    const filteredUsers = useUserFilter();

    const handleClick = async () => {
        // setPage((prevState) => prevState + 1);

        if (page <= total_pages) {
            const gotUsers = await dispatch(
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
                mb={50}
            >
                Working with GET request
            </Typography>
            {filteredUsers?.length > 0 && (
                <Box
                    display={'grid'}
                    gridGap={5}
                    gridTemplateColumns={'1fr'}
                    width={'100%'}
                >
                    {filteredUsers.map((item) => (
                        <Card props={item} key={item.id} />
                    ))}
                </Box>
            )}
            <Box mt={3}>
                <Spinner loading={loading} />
            </Box>
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
        </Container>
    );
};
