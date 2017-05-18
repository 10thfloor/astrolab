import { Meteor } from 'meteor/meteor'

Meteor.publish('users', () => {
    return Meteor.users.find({}, { fields: { 'profile.screen': 1 }})
})
