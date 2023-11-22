import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { People } from '../../people/people';
import { Communities } from '../../communities/communities';

import { Box,} from '@mui/material';



export const DatacardsofPeopleWhoCheckedin = () => {

     // calling the api to access the data
  const people = useTracker(() => {
    const handlePeople = Meteor.subscribe('people');
    if (handlePeople.ready()) {
      return People.find().fetch();
    }
    return [];
  });

  const communities = useTracker(() => {
    const handleCommunities = Meteor.subscribe('communities');
    if (handleCommunities.ready()) {
      return Communities.find().fetch();
    }
    return [];
  });

  //  acesso tanto aos dados de People quanto de Communities

    return(
        <Box>
        <h1>Lista de Pessoas</h1>
        <ul>
          {people.map(person => (
            <div className="w-26 h-36 bg-red-300 mt-6 flex-wrap">
              <li
                key={person._id}
              >{`${person.firstName} ${person.lastName}`}</li>
            </div>
          ))}
        </ul>

        <h1>Lista de Comunidades</h1>
        <ul>
          {communities.map(community => (
            <li key={community._id}>{community.name}</li>
          ))}
        </ul>
      </Box>
    )
}