import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from '../ui/react/'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
)

export default Routes
