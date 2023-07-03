import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { useEffect, useState, useRef } from 'react';

export const useUserFilter = () => {
    const { usersList, newUser } = useSelector(selectUsers);
    const { users, page } = usersList;
    const [updatedUsers, setUpdatedUsers] = useState([]);
    const isNewUser = useRef(newUser);

    useEffect(() => {
        if (users.length > 0 && page === 1) {
            setUpdatedUsers([]);
        }
    }, [page, users]);

    useEffect(() => {
        if (users.length > 0 && !isNewUser.current) {
            setUpdatedUsers((prevState) => [...prevState, ...users]);
        }
    }, [users]);

    const getUniqueListBy = (arr, key) => {
        return [...new Map(arr?.map((item) => [item[key], item])).values()];
    };

    const clearUsers = getUniqueListBy(updatedUsers, 'id');

    const filteredUsersByRegTimestamp = clearUsers?.toSorted(
        (first, second) =>
            second.registration_timestamp - first.registration_timestamp
    );

    return filteredUsersByRegTimestamp;
};
