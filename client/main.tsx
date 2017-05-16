import { Meteor } from 'meteor/meteor';

import * as React from 'react';
import { render } from 'react-dom';

import Hello from '../imports/ui/components/Hello';

export default class HelloWorld extends React.Component<{},{}> {
  render() {
    return (
      <Hello />
    );
  }
}

Meteor.startup(() => {
    console.info('Enjoy Meteor with TypeScript, React & CSS-Next!');
    render(<HelloWorld />, document.getElementById('react-app'));
});