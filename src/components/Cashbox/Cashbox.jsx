import React from 'react';
import EmptyPage from '../../pages/EmptyPage';
import Header from '../Header/Header';
import AddButton from '../ui/AddButton';
import RemoveIcon from '@mui/icons-material/Remove';
import { Fab } from '@mui/material';
import { onOpen } from '../../store/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseModal from './ExpenseModal';
const Cashbox = () => {
  const { isModal } = useSelector((state) => state.isModal);
  const dispatch = useDispatch();
  return (
    <div>
      <Header>Платежи</Header>
      <EmptyPage />
      <div className='absolute right-[20px] bottom-[100px]'>
        <Fab size='small' onClick={() => dispatch(onOpen())}>
          <RemoveIcon />
        </Fab>
      </div>
      <AddButton setModal={onOpen} />
      {isModal && <ExpenseModal onOpen={isModal} />}
    </div>
  );
};

export default Cashbox;
