import { Box } from 'components/Box';
import { Typography } from 'components/Typography';
import { Tooltip } from 'components/Tooltip';
import { phoneFilter } from 'components/TextInput';

export const Card = ({ props: { name, position, email, phone, photo } }) => {
    return (
        <Box p={5} width={'100%'} bg={'white'} borderRadius={10}>
            <Box
                as={'ul'}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
            >
                <Box as={'li'}>
                    <Box
                        as={'img'}
                        src={photo}
                        alt={'photo'}
                        width={70}
                        height={70}
                        borderRadius={'50%'}
                        loading={'lazy'}
                    />
                </Box>
                <Tooltip sx={{ mt: 20 }}>{name}</Tooltip>
                <Typography as={'li'} variant={'body'} mt={20}>
                    {position}
                </Typography>
                <Tooltip>{email}</Tooltip>
                <Typography as={'li'} variant={'body'}>
                    <Box as={'a'} href={`tel:${phone}`}>
                        {phoneFilter(phone).replace(/[-]/g, ' ')}
                    </Box>
                </Typography>
            </Box>
        </Box>
    );
};
