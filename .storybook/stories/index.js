import React from 'react';

import { storiesOf } from '@storybook/react';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

storiesOf('Meteor PWA', module)
  .add('Screen 1', () => (
    <Screen1 />
  ))
  .add('Screen 2', () => (
    <Screen2 />
  ))
  .add('Screen 3', () => (
    <Screen3 />
  ))
