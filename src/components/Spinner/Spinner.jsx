import { StyledSpinner } from './style/StyledSpinner'

export const Spinner = ({ loading }) => {
    const handleLoadingStatus = (loading) => {
        if (loading === 'pending') {
            return <StyledSpinner />
        }
    }
    return handleLoadingStatus(loading)
}
