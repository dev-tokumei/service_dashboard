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
  const styles = (theme) => ({
    thaiTextFieldInputProps: {
      paddingTop: '5px',
    },
  });
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <Modal open={onOpen} onClose={() => dispatch(onClose())}>
        <div className='flex justify-center items-start bg_color h-full p-10 overflow-auto'>
          <div className='w-[960px]'>
            <header className='flex w-full justify-between mb-10'>
              <div className='flex items-center justify-between flex-wrap w-[500px]'>
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
            <main className='w-full flex md:flex justify-between item-center '>
              <div className='w-[460px] grid grid_colums '>
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
                <div className='w-[460px] h-[353.6px] grid grid_colums '>
                  <TextField
                    inputProps={styles}
                    pt='2'
                    sx={{
                      label: { color: 'white' },
                    }}
                    fullWidth
                    label='Клиент*'
                    id='fullWidth'
                  />
                  <TextField
                    sx={{
                      label: { color: 'white' },
                    }}
                    fullWidth
                    label='Телефон'
                    id='fullWidth'
                  />
                  <TextField
                    sx={{
                      label: { color: 'white' },
                    }}
                    color='primary'
                    fullWidth
                    label='Почта'
                    id='fullWidth'
                  />
                  <TextField
                    sx={{
                      label: { color: 'white' },
                    }}
                    pt='20'
                    fullWidth
                    label='Откуда узнал'
                    id='fullWidth'
                  />
                </div>
                <div className='grid grid_colums '>
                  <h1 className='text-md'>Дополнительно</h1>
                  <TextField
                    sx={{
                      label: { color: 'white' },
                    }}
                    pt='20'
                    fullWidth
                    label='Передоплата, TJS'
                    id='fullWidth'
                  />
                  <TextField
                    sx={{
                      label: { color: 'white' },
                    }}
                    pt='20'
                    fullWidth
                    label='Исполнитель'
                    id='fullWidth'
                  />
                  <TextField
                    sx={{
                      label: { color: 'white' },
                    }}
                    pt='20'
                    fullWidth
                    label='Менеджер'
                    id='fullWidth'
                  />
                </div>
              </div>
              <div className=' w-[460px] grid grid_colums '>
                <div className='w-full flex justify-start items-centet pt-2 h-[42px]'>
                  <h1 className='text-start'>Информация</h1>
                </div>
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Причина обрашения'
                  id='fullWidth'
                />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Внешный вид'
                  id='fullWidth'
                />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Вид устройства'
                  id='fullWidth'
                />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='IMEI/SN'
                  id='fullWidth'
                />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Модель'
                  id='fullWidth'
                />
                <TextField
                  sx={{
                    label: { color: 'white' },
                  }}
                  fullWidth
                  label='Комплектация'
                  id='fullWidth'
                />
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
            <footer className='w-full flex flex-col mt-10 '>
              <div className='w-full flex justify-start items-centet mb-5 h-[42px]'>
                <h1 className='text-start'>Товары и услуги</h1>
              </div>
              <div className='w-full flex items-center border-[1px] border-slate-300 h-14 rounded-md bg-green mt-5 mb-5'></div>
              <div className='w-full flex justify-start items-centet mt-2 h-[42px]'>
                <h1 className='text-start pt-2'>Печать</h1>
              </div>
              <div className='w-full flex items-center border-[1px] border-slate-300 h-14 rounded-md bg-green mt-5 mb-5'></div>
            </footer>
          </div>
        </div>
      </Modal>
    </ThemeProvider>
  );
};

export default OrderModal;
