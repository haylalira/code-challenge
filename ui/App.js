// /client/components/App.jsx
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { People } from '../people/people';
import { Communities } from '../communities/communities';

import { Box, Card, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GroupIcon from '@mui/icons-material/Group';

import { InputSearch } from '../infra/Components/InputSearch';
import { TabsNavigation } from '../infra/Components/TabsNavigation';

export const App = () => {
  return (
    <div className="w-full bg-gradient to-emerald-50 from-slate-300 flex flex-col items-center ">
      <Box className="w-full h-32 border-b-2 border-neutral-200 flex items-center justify-center">
        <InputSearch />
      </Box>

      <Box className="mt-28 mb-24">
        <Card
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[56.25rem] h-72 flex flex-col  justify-center gap-12 "
          sx={{ borderRadius: '1.6rem' }}
        >
          <div className="text-white  p-4 flex flex-col items-center">
            <h1 className='font-bold text-lg'>NOME DO EVENTO</h1>
            <p>1 Jun. 2023 - 4 Jun. 2023</p>
            <div className="flex gap-2">
              <GroupIcon fontSize="large" />
              <h1 className="text-6xl font-bold "> 41.000,00</h1>
            </div>
          </div>

          {/* Adicionado o contêiner flexível para os botões */}
          <div className="flex items-center justify-around">
            <div className="flex gap-4">
              <IconButton sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                <ArrowUpwardIcon fontSize="large" color="success" />
              </IconButton>
              <div className="flex flex-col text-white">
                <h1>Ingresos</h1>
                <h1 className="font-bold ">$55.422,00</h1>
              </div>
            </div>

            <div className="flex gap-4">
              <IconButton sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                <ArrowDownwardIcon fontSize="large" color="error" />
              </IconButton>
              <div className="flex flex-col text-white">
                <h1>Ingresos</h1>
                <h1 className="font-bold ">$55.422,00</h1>
              </div>
            </div>
          </div>
        </Card>
      </Box>

      <Box>
        
        <TabsNavigation />
      </Box>
    </div>
  );
};
