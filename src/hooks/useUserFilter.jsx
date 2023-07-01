import { useSelector, useDispatch } from 'react-redux'
import { selectUsers } from 'redux/selectors'
import { useEffect, useState } from 'react'
import { getUsers } from 'redux/service'

export const useUserFilter = (page) => {
    const dispatch = useDispatch()
    const { usersList } = useSelector(selectUsers)
    const { users } = usersList
    const [updatedUsers, setUpdatedUsers] = useState([])

    useEffect(() => {
        const filteredUsersByRegTimestamp = users?.toSorted(
            (first, second) =>
                first.registration_timestamp - second.registration_timestamp
        )
        if (filteredUsersByRegTimestamp?.length > 0) {
            setUpdatedUsers((prevState) => [
                ...prevState,
                ...filteredUsersByRegTimestamp,
            ])
        }
    }, [users])

    useEffect(() => {
        if (page > 1 && page <= usersList.total_pages) {
            dispatch(
                getUsers({
                    params: {
                        page: page,
                        count: '6',
                    },
                })
            )
        }
    }, [dispatch, page, usersList.total_pages])

    return updatedUsers
}
