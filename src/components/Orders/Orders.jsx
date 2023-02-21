import React from 'react';
import EmptyPage from '../../pages/EmptyPage';
import { onOpen } from '../../store/slices/modalSlice';
import AppBar from '../Appbar/AppBar';
import Header from '../Header/Header';
import AddButton from '../ui/AddButton';
import OrderModal from './OrderModal';
import { useSelector } from 'react-redux';

const AllOrder = () => {
  const { isModal } = useSelector((state) => state.isModal);
  return (
    <div className='w-full p2'>
      <Header>Заказы</Header>
      <AppBar />
      <EmptyPage />
      {isModal && <OrderModal onOpen={isModal} />}
      <AddButton setModal={onOpen} />
    </div>
  );
};

export default AllOrder;
