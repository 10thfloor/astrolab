import * as React from 'react'
import { connect } from 'react-redux'
import {
    Route,
    Redirect
} from 'react-router-dom'

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={props =>
      (authenticated
        ? <Component {...props} />
        : <Redirect
            to={{
                pathname: '/login',
                state: { from: props.location }
            }}
        />)}
    />
)

function mapStateToProps({ apollo }) {
    return {
        authenticated: apollo.data.ROOT_QUERY.user
    }
}

export default connect(mapStateToProps)(PrivateRoute)
