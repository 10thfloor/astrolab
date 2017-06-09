import * as React from 'react'
import Hello from './components/HelloComponent'

import PrivateRoute from './components/PrivateRoute'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Hello} />
            </Router>
        )
    }
}
