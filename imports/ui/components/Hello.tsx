import * as React from 'react'
import { createContainer } from 'react-meteor-data'
import CubesLoader from './CubesLoader'

import glamorous from 'glamorous'

const WelcomeMessage = glamorous.div({
  width: '100%',
  padding: '1rem',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textShadow: '0px 0px 2px #2C272D'
})

const Loading = glamorous.div({
    width: '100%',
    padding: '1rem',
    margin: 0,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginTop: '1rem'
})

interface HelloUser {
    _id: string;
}

class Hello extends React.Component<{ loggedin: boolean, users: HelloUser[], loading: boolean }, {}> {
  render() {
    return (
    <div>
        <WelcomeMessage>
          Meteor, TypeScript, CSS-Next, React
          <div> {
            this.props.loading ?
            <CubesLoader color="white"/> :
            <div style={{ marginTop: '1rem' }}>
                <div style={{ marginBottom: '1rem' }}> Logged in: {this.props.loggedin ? 'Yes' : 'No'}</div>
                <div> Users: </div>
                {this.props.users.map((user) => (<div key={user._id}>{user._id}</div>))}
            </div>
          }
         </div>
        </WelcomeMessage>
    </div>
    )
  }
}

export default createContainer(() => {
    const handle = Meteor.subscribe('users')
    const loading = !handle.ready()
    const users = Meteor.users.find({})
    const usersExist = !loading && !!users
    return {
        loading,
        users: usersExist ? users.fetch() : [],
        loggedin: Meteor.userId()
    }
}, Hello)

