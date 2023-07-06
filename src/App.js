// import Header from 'sections/Header';
// import { Hero } from 'sections/Hero';
// import { Users } from 'sections/Users';
// import { Request } from 'sections/Request';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from 'redux/service';
import { useRef } from 'react';
// import ToastNotification from 'components/ToastNotification';
import { useFonts } from 'hooks/useFonts';
import { lazy, Suspense } from 'react';
import { Box } from 'components/Box';

const lazyComponent = (ref) => lazy(() => import(`${ref}`));
const ToastNotification = lazyComponent('components/ToastNotification');
const Header = lazyComponent('sections/Header');
const Hero = lazyComponent('sections/Hero');
const Users = lazyComponent('sections/Users');
const Request = lazyComponent('sections/Request');

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
