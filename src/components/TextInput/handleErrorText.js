export const handleErrorText = (error, id, Typography, Box) => {
    if (!!error?.[id]) {
        return (
            <Typography
                as={'p'}
                variant={'helperText'}
                ml={16}
                mt={1}
                color={'error'}
            >
                {error?.[id]?.message}
            </Typography>
        )
    } else if (id === 'phone') {
        return (
            <Typography
                as={'p'}
                variant={'helperText'}
                ml={16}
                mt={1}
                color={'placeholder'}
            >
                +38 (XXX) XXX - XX - XX
            </Typography>
        )
    } else {
        return <Box width={'100%'} py={9} />
    }
}
