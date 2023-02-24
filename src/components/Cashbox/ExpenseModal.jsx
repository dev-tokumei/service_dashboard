import React from 'react';
import { Modal } from '@mui/material';

const ExpenseModal = ({ isModal }) => {
  return (
    <Modal open={isModal}>
      <div>
        <nav className='flex w-full justify-between items-center p-2 h-[52px]'>
          <div className='w-[500px] flex justify-between'>
            <button className='w-[143px] text-[14px] font-bold hover:border-b-2 border-teal-800 hover:text-teal-800'>
              Я исполнитель
            </button>
            <button className='w-[73px] text-[14px] font-bold hover:border-b-2 border-teal-800 hover:text-teal-800'>
              Я автор
            </button>
            <button className='w-[117px] text-[14px] font-bold hover:border-b-2 border-teal-800 hover:text-teal-800'>
              Выполненные
            </button>
            <button className='w-[108px] text-[14px] font-bold hover:border-b-2 border-teal-800 hover:text-teal-800'>
              Просрочены
            </button>
            <button className='w-[46px] text-[14px] font-bold hover:border-b-2 border-teal-800 hover:text-teal-800'>
              Все
            </button>
          </div>
          <div className='w-[900px]'></div>
        </nav>
      </div>
    </Modal>
  );
};

export default ExpenseModal;
