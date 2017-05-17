import { Meteor } from 'meteor/meteor'

import * as React from 'react'
import { render } from 'react-dom'

import '../imports/ui/styles/reset'
import '../imports/ui/styles/global'

import Hello from '../imports/ui/components/Hello'

export default class HelloWorld extends React.Component<{}, {}> {
  render() {
    return (
      <Hello />
    )
  }
}

Meteor.startup(() => {
    render(<HelloWorld />, document.getElementById('react-app'))
})
