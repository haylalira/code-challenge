import * as React from 'react';
import { Box,Card, Button} from '@mui/material';
import Tab from '@mui/material/Tab';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTracker } from 'meteor/react-meteor-data';
import { People } from '../../people/people';
import { DatacardsofPeopleWhoCheckedin } from './DatacardsofPeopleWhoCheckedin';
import { useState } from 'react';
import { useEffect } from 'react';

export function TabsNavigation(
 
) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  const people = useTracker(() => {
    const handlePeople = Meteor.subscribe('people');
    if (handlePeople.ready()) {
      return People.find().fetch();
    }
    
    return [];
  });

//with clear instructions not to make modifications to the database, raising doubts about the possibility of doing so using crud methods,
// I made a copy of the list where I can manipulate
const  CopyListPeople = people.slice()
const [listOfPeopleWithNewProperties, setListOfPeopleWithNewProperties] = useState([])
const [listPeopleCheckIn, setListPeopleCheckIn] = useState([])

 const HandleCheckIn = ()=>{
  const UpdateList = CopyListPeople.map(item =>({...item, isAtEvent: true , NotInTheEVent: false,}))
  setListOfPeopleWithNewProperties(UpdateList)
 }

 const HandleWithPeopleFilterWithCheckIn =()=>{
  const ListOfPeopleWhoCheckedIn = listOfPeopleWithNewProperties.filter(item => item.isAtEvent === 'true')
  setListPeopleCheckIn(ListOfPeopleWhoCheckedIn)
 }
 console.log("pessoascomnovaspropriedades",listOfPeopleWithNewProperties )
 console.log("pessoascomCheckIn",listPeopleCheckIn )

 useEffect(()=>{
  HandleWithPeopleFilterWithCheckIn()
 },[[listOfPeopleWithNewProperties]])

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab label="All CheckIn" value="1" />
           <Tab label="Item Two" value="2" />
            <Tab label="CheckinOut" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" className="">
        {listPeopleCheckIn.map(peoplelist =>(
           <Card key={peoplelist._id}  sx={{ width:"600px" , height:"100px", marginTop:"10px",background: "rgb(63,94,251)",
           background: "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 92%)", color:"#fff" }}
            className='flex items-center justify-around'
           >
             <div className='!text-gray-100'> <h1 className='font-bold'>{`${peoplelist.firstName} ${peoplelist.lastName}`}</h1>
              <p>{peoplelist.title}</p>
              <h1>{peoplelist.companyName}</h1>
              
              </div>
            <div>
 <Button sx={{color:"#fff"}}  >CheckOut</Button>
 <Button sx={{color:"#fff"}} onClick={HandleCheckIn}>CheckIn</Button>
      <data></data>
 </div>
    
         
           </Card>
        ))}
        </TabPanel>


       <TabPanel value="2">
       <Box className=''>
        
        
        <div className='flex flex-col mt-10'>
        {people.map(person => (
          <Card key={person._id}  sx={{ width:"600px" , height:"100px", marginTop:"10px",background: "rgb(63,94,251)",
          background: "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 92%)", color:"#fff" }}
           className='flex items-center justify-around'
          >
            <div className='!text-gray-100'> <h1 className='font-bold'>{`${person.firstName} ${person.lastName}`}</h1>
             <p>{person.title}</p>
             <h1>{person.companyName}</h1>
             
             </div>
           <div>
<Button sx={{color:"#fff"}}  >CheckOut</Button>
<Button sx={{color:"#fff"}} onClick={HandleCheckIn}>CheckIn</Button>
     <data></data>
</div>
   
        
          </Card>
        ))}
      </div>
       

       
        
      </Box>





       </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
