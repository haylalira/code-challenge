import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { People } from '../../people/people';


import { Box,Card, Button} from '@mui/material';
import { ButtonCheckIn } from './ButtonCheckIn';




export const DatacardsofPeopleWhoCheckedin = ( 
  peopleList,
  handleCheckIn,
  handleCheckOut,
) => {




     // calling the api to access the data
  const people = useTracker(() => {
    const handlePeople = Meteor.subscribe('people');
    if (handlePeople.ready()) {
      return People.find().fetch();
    }
    console.log(People, "tem isso")
    return [];
  });



  //  acesso tanto aos dados de People quanto de Communities

    return(
        <Box className=''>
        
        
        <div className='flex flex-col mt-10'>
        {peopleList.map(person => (
          <Card key={person._id}  sx={{ width:"600px" , height:"100px", marginTop:"10px",background: "rgb(63,94,251)",
          background: "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 92%)", color:"#fff" }}
           className='flex items-center justify-around'
          >
            <div className='!text-gray-100'> <h1 className='font-bold'>{`${person.firstName} ${person.lastName}`}</h1>
             <p>{person.title}</p>
             <h1>{person.companyName}</h1>
             
             </div>
           <div>
<Button sx={{color:"#fff"}} onClick={() => handleCheckIn(person)} >CheckOut</Button>
<Button sx={{color:"#fff"}} onClick={() => handleCheckOut(person)} >CheckIn</Button>
     <data></data>
</div>
   
        
          </Card>
        ))}
      </div>
       

       
        
      </Box>
    )
}