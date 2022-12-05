import React from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'
import Auth from '../services/Auth'
import AAuth from '../services/AdminAuth'

function ProtectedRoute({ component: Component, ...rest }) {
    const history = useHistory();
    return (
        { ...rest }.public ?
            <Route {...rest} render={props => <Component {...props} history={history} />} /> :
            <Route {...rest} render={props => {
                if (Auth.isAuthenciated()) {
                    return <Component {...props} history={history} />
                }
                else if (AAuth.isAuthenciated()) {
                    return <Component {...props} history={history} />
                }
                else {
                    return <Redirect to={"/"} />
                }
            }} />
    )
}

export default ProtectedRoute