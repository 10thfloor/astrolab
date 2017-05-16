import { Meteor } from 'meteor/meteor'
import '../imports/startup/fixtures'

Meteor.users.allow({
  update(): boolean {
    return true
  }
})


