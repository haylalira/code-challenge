import { Meteor } from 'meteor/meteor';
import { loadInitialData } from '../infra/initial-data';
import { People } from '../people/people';
import { Communities } from '../communities/communities';


Meteor.startup(() => {
  // DON'T CHANGE THE NEXT LINE
  loadInitialData();

  // YOU CAN DO WHATEVER YOU WANT HERE

  Meteor.publish('people', function () {
    return People.find();
  });

  Meteor.publish('communities', function (){
     return Communities.find()
  })
 
});
