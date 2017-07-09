import * as React from 'react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import styled from 'styled-components'

type Profile = { [screen: string]: string }
interface HelloUser {
  _id: string;
  profile: Profile;
}

const WelcomeMessage = styled.div`
    padding: 1rem;
`
class Hello extends React.Component<{ userLoading: boolean, currentUser: HelloUser }, {}> {
  render() {
    const user = this.props.currentUser
    return (
      <div>
        <WelcomeMessage>
          <p className="title">Meteor PWA</p>
          <div>
            <div style={{ marginTop: '1rem' }}>
              <div>
                <span className="sub-title">Logged in:</span> {user ? 'Yes' : 'No'}
              </div>
              <div className="sub-title"> User: {(user && user.profile.screen) || 'None'}</div>
            </div>
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
  props: ({ data: { user, error, loading } }) => {
    return {
      currentUser: user,
      loading
    }
  },
})

export default withData(Hello)

