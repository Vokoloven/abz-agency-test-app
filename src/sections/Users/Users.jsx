import { Button } from 'components/Button'
import { Card } from 'components/Card'
import { Container } from 'components/Container'
import { Typography } from 'components/Typography'
import { Box } from 'components/Box'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { selectUsers } from 'redux/selectors'
import { Spinner } from 'components/Spinner'
import { useUserFilter } from 'hooks/useUserFilter'

export const Users = () => {
    const [page, setPage] = useState(1)
    const {
        loading,
        usersList: { total_pages },
    } = useSelector(selectUsers)
    const filteredUsers = useUserFilter(page)

    const handleClick = () => {
        setPage((prevState) => prevState + 1)
    }

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
    )
}
