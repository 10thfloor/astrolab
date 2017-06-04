import { Meteor } from 'meteor/meteor'
import '../imports/startup/fixtures'
import '../imports/startup/apollo-server'

Meteor.users.allow({
  update() {
    return true
  }
})



