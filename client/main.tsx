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
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('Service worker is registered!')
            })
            .catch((error) => {
                console.log('Service worker failed ', error)
        })
    }
})


