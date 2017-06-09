import * as React from 'react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import glamorous from 'glamorous'

import CubesLoader from './CubesLoader'

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

class Hello extends React.Component<{userLoading: boolean, currentUser: HelloUser}, {}> {
    render() {
        const user = this.props.currentUser
        return (
            <div>
                <WelcomeMessage>
                    <p className="title">LMS V2</p>
                    <div> {
                        this.props.userLoading ?
                            <div className="right-top">
                                <CubesLoader color="white" />
                            </div> :
                            <div style={{ marginTop: '1rem' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <span className="sub-title tk-fira-sans">Logged in:</span> {user ? 'Yes' : 'No'}
                                </div>
                                <div className="sub-title tk-fira-sans"> User: </div>
                                <div>{(user && user.profile.screen) || 'None'}</div>
                            </div>
                    }
                    </div>
                </WelcomeMessage>
            </div>
        )
    }
}

const GET_USER_DATA = gql`
  query getCurrentUser {
    user {
      profile {
        screen
      }
      _id
    }
  }
`

const withData = graphql(GET_USER_DATA, {
    props: ({ data: { user, error, loading }}) => {
        if (loading) { return { userLoading: true }}
        if (error) { return { hasErrors: true }}

        return {
            currentUser: user
        }
    },
})

export default withData(Hello)

