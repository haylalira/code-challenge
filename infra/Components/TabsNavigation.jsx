import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { DatacardsofPeopleWhoCheckedin} from "./DatacardsofPeopleWhoCheckedin"

export function TabsNavigation() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1',  }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}  textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example">
            <Tab label="All CheckIn" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="CheckinOut" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" className=''><DatacardsofPeopleWhoCheckedin/></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}