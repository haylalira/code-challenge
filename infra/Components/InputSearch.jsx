import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useState } from 'react';

export function InputSearch() {
 const [seletedEvent ,setSelectedEvent]= useState(any)

 const communities = useTracker(() => {
  const handleCommunities = Meteor.subscribe('communities');
  if (handleCommunities.ready()) {
    return Communities.find().fetch();
  }
  return [];
});

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 900 }}
    >
    
    <select onChange={(e) => setSelectedEvent(e.target.value)}>
  <option value="">Select an Event</option>
  {communities.map((community) => (
    <option key={community._id} value={community._id}>
      {community.name}
    </option>
  ))}
</select>
      
     
    </Paper>
  );
}