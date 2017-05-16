import * as React from 'react'
import glamorous from 'glamorous'

const WelcomeMessage = glamorous.p({
  width: '100%',
  padding: '1rem',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textShadow: '0px 0px 2px #2C272D'
})

export default class Hello extends React.Component<{}, {}> {
  render(): any {
    return (
      <WelcomeMessage>Meteor, TypeScript, CSS-Next, React</WelcomeMessage>
    )
  }
}
