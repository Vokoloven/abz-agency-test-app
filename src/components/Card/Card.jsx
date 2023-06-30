import { Box } from 'components/Box'
import { ReactComponent as Image } from 'assets/photo-cover.svg'
import { Typography } from 'components/Typography'

export const Card = ({ props: { name, rank, email, phone } }) => {
    return (
        <Box p={5} width={'100%'} bg={'white'} borderRadius={10}>
            <Box
                as={'ul'}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
            >
                <Image />
                <Typography as={'li'} variant={'body'} mt={20}>
                    {name}
                </Typography>
                <Typography as={'li'} variant={'body'} mt={20}>
                    {rank}
                </Typography>
                <Typography as={'li'} variant={'body'}>
                    {email}
                </Typography>
                <Typography as={'li'} variant={'body'}>
                    {phone}
                </Typography>
            </Box>
        </Box>
    )
}
