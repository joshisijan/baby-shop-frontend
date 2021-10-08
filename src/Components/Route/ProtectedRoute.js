import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'

const ProtectedRoute = ({unprotectedComponent, protectedComponent, ...rest}) => {
    const userDetailState = useSelector(state => state.userDetail)
    return (
        <Route  
            {...rest}
            component={  
                userDetailState.accessToken !== null ? 
                protectedComponent :
                unprotectedComponent
            }
        />
    )
}

export default ProtectedRoute
