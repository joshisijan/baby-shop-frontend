import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const RedirectProtectedRoute = ({ redirect, component, ...rest }) => {
    const userDetailState = useSelector(state => state.userDetail)
    return (
        userDetailState.accessToken !== null ?
            <Route
                {...rest}
                component={component}
            /> :
            <Redirect to="/" />

    )
}

export default RedirectProtectedRoute
