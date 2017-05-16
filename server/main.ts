import { Meteor } from 'meteor/meteor';
import '../imports/startup/fixtures';

Meteor.users.allow({
  update(userId, doc, fieldNames, modifier) {
    return true;
  }
});

