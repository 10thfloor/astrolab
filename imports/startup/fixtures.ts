import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  if(!Meteor.users.find().count()) {
    Accounts.createUser({
      email: 'mack@test.com', 
      password: 'test',
      profile: {}
    });
    console.log('Inserting test user account.');
  }
});
