import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const ToastNotification = () => {
    const { errorMessage, loadingPost } = useSelector(selectUsers);

    useEffect(() => {
        if (loadingPost === 'failed') {
            toast.error(`${errorMessage}`, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    }, [errorMessage, loadingPost]);

    return <ToastContainer />;
};

export default ToastNotification;
