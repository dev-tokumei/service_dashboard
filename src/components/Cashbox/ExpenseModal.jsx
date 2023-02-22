import { Modal } from '@mui/material';
import React from 'react';

const ExpenseModal = ({ isModal }) => {
  console.log(isModal);
  return (
    <Modal open={isModal}>
      <div>hello</div>
    </Modal>
  );
};

export default ExpenseModal;
