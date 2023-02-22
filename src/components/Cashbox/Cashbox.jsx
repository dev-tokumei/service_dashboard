import React from 'react';
import EmptyPage from '../../pages/EmptyPage';
import Header from '../Header/Header';
import AddButton from '../ui/AddButton';
import RemoveIcon from '@mui/icons-material/Remove';
import { Fab } from '@mui/material';

const Cashbox = () => {
  return (
    <div>
      <Header>Платежи</Header>
      <EmptyPage />
      <div className='absolute right-[20px] bottom-[100px]'>
        <Fab size='small'>
          <RemoveIcon />
        </Fab>
      </div>
      <AddButton />
    </div>
  );
};

export default Cashbox;
