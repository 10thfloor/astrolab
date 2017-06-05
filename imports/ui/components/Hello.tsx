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
    justifyContent: 'center'
})

const Loading = glamorous.div({
    width: '100%',
    padding: '1rem',
    margin: 0,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginTop: '1rem'
})

type Profile = { [screen: string]: string }
interface HelloUser {
    _id: string;
    profile: Profile;
}

class Hello extends React.Component<{ loggedin: boolean, users: HelloUser[], loading: boolean }, {}> {
    render() {
        return (
            <div>
                <WelcomeMessage>
                    <p className="title">LMS V2</p>
                    <div> {
                        this.props.loading ?
                            <div className="right-top">
                                <CubesLoader color="white" />
                            </div> :
                            <div style={{ marginTop: '1rem' }}>
                                <div style={{ marginBottom: '1rem' }}> 
                                    <span className="sub-title tk-fira-sans">Logged in:</span> {this.props.loggedin ? 'Yes' : 'No'}
                                </div>
                                <div className="sub-title tk-fira-sans"> Users: </div>
                                {this.props.users.map((user) => (<div key={user._id}>{user.profile.screen}</div>))}
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

