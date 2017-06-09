import * as React from 'react'

import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

import HelloComponent from './components/HelloComponent'
import PrivateRoute from './components/PrivateRoute'

export const history = createHistory()

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={HelloComponent} />
                </Switch>
            </ConnectedRouter>
        )
    }
}
