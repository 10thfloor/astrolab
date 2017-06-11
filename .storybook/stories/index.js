import React from 'react';

import { storiesOf } from '@storybook/react';

import IntroScreen from './IntroScreen';
import StudentHome from './StudentHome';
import TeacherHome from './TeacherHome';

storiesOf('LMSV2', module)
  .add('Intro Screen', () => (
    <IntroScreen />
  ))
  .add('Student Screen', () => (
    <StudentHome />
  ))
  .add('Teacher Screen', () => (
    <TeacherHome />
  ))
