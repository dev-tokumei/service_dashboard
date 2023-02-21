import { Button, IconButton, Modal, TextField, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { onClose } from '../../store/slices/modalSlice';
import { useDispatch } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Form } from 'react-router-dom';

const TodoModal = ({ onOpen }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);

  return (
    <div>
      <Modal open={onOpen} onClose={() => dispatch(onClose())}>
        <div className='w-[448px] h-[518px] rounded-lg bg_color p-5 absolute top-20 left-[35%]'>
          <div className='w-full flex h-[50px] justify-between items-center p-2'>
            <h1 className='font-bold text-[20px]'>Задача</h1>
            <Tooltip title='Закрыть'>
              <IconButton
                style={{ color: 'white' }}
                onClick={() => dispatch(onClose())}
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </div>
          <form>
            <div className='flex flex-col items-center justify-between pt-8'>
              <input
                className='bg_color focus:outline-none w-[360px]  border-slate-300 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 border rounded-[10px] h-[56px] p-4 mt-7'
                type='text'
                placeholder='Описание'
              />
              <input
                className='bg_color focus:outline-none w-[360px]  border-slate-300 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 border rounded-[10px] h-[56px] p-4 mt-7'
                type='text'
                placeholder='Исполнитель'
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label='Срок'
                  sx={{
                    width: 360,
                    borderRadius: 10,
                    paddingTop: 5,
                    color: 'white',
                  }}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      fullWidth
                      sx={{ marginTop: 2, label: { color: 'white' } }}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
          </form>
          <div className='w-full flex justify-center mt-14'>
            <Button
              className='bg-gradient-to-r from-teal-300 to-teal-500 hover:from-teal-300 hover:to-teal-400'
              style={{
                color: 'black',
                width: '360px',
                height: '42px',
                fontWeight: 'bold',
                fontSize: '12px',
                borderRadius: '10px',
              }}
            >
              Сохранить
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TodoModal;

{
  /* <div className="w-[448px] h-[450px] rounded-lg bg_color shadow-lg p-5">
      <div className="w-full flex h-[50px] justify-between items-center p-2">
        <h1 className="font-bold text-[20px]">Задача</h1>
        <IconButton
          style={{ color: "white" }}
          onClick={() => dispatch(onClose())}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div className="flex flex-col items-center justify-between ">
        <input
          className="bg_color focus:outline-none w-[360px]  border-slate-300 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 border rounded-[10px] h-[56px] p-2 mt-4"
          type="text"
          placeholder="Описание"
        />
        <input
          className="bg_color focus:outline-none w-[360px]  border-slate-300 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 border rounded-[10px] h-[56px] p-2 mt-4"
          type="text"
          placeholder="Исполнитель"
        />
        <input
          className="bg_color focus:outline-none w-[360px]  border-slate-300 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 border rounded-[10px] h-[56px] p-2 mt-4"
          type="date"
          placeholder="Срок"
        />
      </div>
      <div className="w-full flex justify-center mt-4">
        <Button
          className="bg-gradient-to-r from-teal-300 to-teal-500 hover:from-teal-300 hover:to-teal-400"
          style={{
            color: "black",
            width: "360px",
            height: "42px",
            fontWeight: "bold",
            fontSize: "12px",
            borderRadius: "10px",
          }}
        >
          Сохранить
        </Button>
      </div>
    </div> */
}
