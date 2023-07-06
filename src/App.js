import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from 'redux/service';
import { useRef } from 'react';
import { useFonts } from 'hooks/useFonts';
import { lazy, Suspense } from 'react';
import { Box } from 'components/Box';

const ToastNotification = lazy(() => import('components/ToastNotification'));
const Header = lazy(() => import('sections/Header'));
const Hero = lazy(() => import('sections/Hero'));
const Users = lazy(() => import('sections/Users'));
const Request = lazy(() => import('sections/Request'));

export const App = () => {
    const dispatch = useDispatch();
    const isFirstRender = useRef(true);
    useFonts();

    useEffect(() => {
        if (isFirstRender.current === true) {
            dispatch(
                getUsers({
                    params: {
                        page: '1',
                        count: '6',
                    },
                })
            );

            return () => {
                isFirstRender.current = false;
            };
        }
    }, [dispatch]);

    return (
        <Suspense fallback={<Box as={'p'}>Loading...</Box>}>
            <ToastNotification />
            <Header />
            <Hero />
            <Users />
            <Request />
        </Suspense>
    );
};
