import { Meteor } from 'meteor/meteor'

import * as React from 'react'
import { render } from 'react-dom'

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
        navigator.serviceWorker.register('/sw.js', { scope: './' })
    }
})


