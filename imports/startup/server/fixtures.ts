import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
  if (!Meteor.users.find().count()) {
    Accounts.createUser({
      email: 'test@test.com',
      password: 'test',
      profile: {
        screen: 'Friendly Robot'
      }
    })
    console.log('Inserting test user account.')
  }
})
