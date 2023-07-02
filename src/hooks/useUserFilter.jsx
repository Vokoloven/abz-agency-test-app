import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { useEffect, useState } from 'react';

export const useUserFilter = () => {
    const { usersList, newUser } = useSelector(selectUsers);
    const { users } = usersList;
    const [updatedUsers, setUpdatedUsers] = useState([]);

    useEffect(() => {
        const filteredUsersByRegTimestamp = users?.toSorted(
            (first, second) =>
                second.registration_timestamp - first.registration_timestamp
        );
        const length = filteredUsersByRegTimestamp?.length;

        if (length > 0) {
            !newUser
                ? setUpdatedUsers((prevState) => [
                      ...prevState,
                      ...filteredUsersByRegTimestamp,
                  ])
                : setUpdatedUsers([]);
        }
    }, [newUser, users]);

    useEffect(() => {}, []);

    return updatedUsers;
};
