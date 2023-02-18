import {
  Button,
  FormControlLabel,
  IconButton,
  Modal,
  Radio,
  TextField,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { onClose } from '../../store/slices/modalSlice';
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../ui/theme';

const OrderModal = ({ onOpen }) => {
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <Modal open={onOpen} onClose={() => dispatch(onClose())}>
        <div className='flex justify-center items-start bg_color h-full p-10'>
          <div className='w-[960px]'>
            <header className='flex w-full justify-between mb-10'>
              <div className='flex items-center justify-between w-[500px]'>
                <h1 className='font-bold text-2xl mr-2'>Заказ</h1>
                <FormControlLabel
                  color='wihte'
                  value='female'
                  control={<Radio />}
                  label='Платный'
                />
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Гарантийный'
                />
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Выездной'
                />
              </div>
              <div className='flex items-center'>
                <IconButton style={{ color: 'white' }}>
                  <AttachFileIcon />
                </IconButton>
                <IconButton
                  sx={{ color: 'white' }}
                  onClick={() => dispatch(onClose())}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </header>
            <main className='w-full flex justify-between item-center'>
              <div className='flex w-[460px] flex-col '>
                <div className='w-full flex justify-between items-center'>
                  <div>
                    <h1>Клиент</h1>
                  </div>
                  <div>
                    <FormControlLabel
                      value='female'
                      control={<Radio />}
                      label='Физ. лицо'
                    />
                    <FormControlLabel
                      value='female'
                      control={<Radio />}
                      label='Компания'
                    />
                  </div>
                </div>
                <br />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Клиент*'
                  id='fullWidth'
                />
                <br />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Телефон'
                  id='fullWidth'
                />
                <br />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  color='primary'
                  fullWidth
                  label='Почта'
                  id='fullWidth'
                />
                <br />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Откуда узнал'
                  id='fullWidth'
                />
                <br />
                <br />
                <h1 className='text-md'>Дополнительно</h1>
              </div>
              <div className='flex w-[460px] flex-col '>
                <div className='w-full flex justify-start items-centet pt-2 h-[42px]'>
                  <h1 className='text-start'>Информация</h1>
                </div>
                <br />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Причина обрашения'
                  id='fullWidth'
                />
                <br />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Внешный вид'
                  id='fullWidth'
                />
                <br />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Вид устройства'
                  id='fullWidth'
                />
                <br />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='IMEI/SN'
                  id='fullWidth'
                />
                <br />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Модель'
                  id='fullWidth'
                />
                <br />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Комплектация'
                  id='fullWidth'
                />
                <br />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Пароль'
                  id='fullWidth'
                />
              </div>
            </main>
          </div>
        </div>
      </Modal>
    </ThemeProvider>
  );
};

export default OrderModal;
