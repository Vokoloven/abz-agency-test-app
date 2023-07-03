import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { useCallback, useEffect, useState, useRef } from 'react';

export const useUserFilter = () => {
    const { usersList, newUser } = useSelector(selectUsers);
    const { users } = usersList;
    const [updatedUsers, setUpdatedUsers] = useState([]);
    const isAddNewUser = useRef(newUser);

    const getData = useCallback(() => {
        const filteredUsersByRegTimestamp = users?.toSorted(
            (first, second) =>
                second.registration_timestamp - first.registration_timestamp
        );
        const length = filteredUsersByRegTimestamp?.length;

        if (isAddNewUser.current && length > 0) {
            setUpdatedUsers(filteredUsersByRegTimestamp);

            return () => {
                isAddNewUser.current = false;
            };
        }

        if (!isAddNewUser.current && length > 0) {
            setUpdatedUsers((prevState) => [
                ...prevState,
                ...filteredUsersByRegTimestamp,
            ]);
        }
    }, [users]);

    useEffect(() => {
        getData();
    }, [getData]);

    // useEffect(() => {
    //     const filteredUsersByRegTimestamp = users?.toSorted(
    //         (first, second) =>
    //             second.registration_timestamp - first.registration_timestamp
    //     );
    //     const length = filteredUsersByRegTimestamp?.length;
    // }, [users]);

    console.log(updatedUsers);

    return updatedUsers;
};
