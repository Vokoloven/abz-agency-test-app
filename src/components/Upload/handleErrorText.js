export const handleErrorText = (error, Typography, Box) => {
    if (!!error) {
        return (
            <Typography
                as={'p'}
                variant={'helperText'}
                ml={16}
                mt={1}
                color={'error'}
            >
                {error?.message}
            </Typography>
        )
    } else {
        return <Box width={'100%'} py={9} />
    }
}
