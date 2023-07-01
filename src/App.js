import { Header } from 'sections/Header'
import { Hero } from 'sections/Hero'
import { Users } from 'sections/Users'
import { Request } from 'sections/Request'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from 'redux/service'
import { useRef } from 'react'

export const App = () => {
    const dispatch = useDispatch()
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        dispatch(
            getUsers({
                params: {
                    page: '1',
                    count: '6',
                },
            })
        )
    }, [dispatch])

    return (
        <>
            <Header />
            <Hero />
            <Users />
            <Request />
        </>
    )
}
