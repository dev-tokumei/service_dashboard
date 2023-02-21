import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoneyOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { IconButton, Tooltip } from '@mui/material';

const Navbar = () => {
  return (
    <nav className='w-[60px] flex flex-col  overflow-auto h-screen justify-between border-right fixed z-[-10px] bg_color'>
      <div className='h-[550px] flex flex-col justify-between'>
        <img className='mt-2 cursor-pointer' src={logo} alt='logo' />
        <div className='place-self-center h-[40px]'>
          <Link to='/task'>
            <Tooltip title='Задачи'>
              <IconButton style={{ color: 'white' }}>
                <CheckCircleOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
        <div className='place-self-center h-[40px]'>
          <Link to='/order'>
            <Tooltip title='Заказы'>
              <IconButton style={{ color: 'white' }}>
                <MoveToInboxOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
        <div className='place-self-center h-[40px]'>
          <Link to='/cashbox'>
            <Tooltip title='Платежи'>
              <IconButton style={{ color: 'white' }}>
                <AttachMoneyIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
        <div className='place-self-center h-[40px]'>
          <Link to='/users'>
            <Tooltip title='Клиенты'>
              <IconButton style={{ color: 'white' }}>
                <PeopleOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
        <div className='place-self-center h-[40px]'>
          <Link to='/inventory'>
            <Tooltip title='Склад'>
              <IconButton style={{ color: 'white' }}>
                <ViewCompactOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
        <div className='place-self-center h-[40px]'>
          <Link to='/market'>
            <Tooltip title='Магазин'>
              <IconButton style={{ color: 'white' }}>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
        <div className='place-self-center h-[40px]'>
          <Link to='/report'>
            <Tooltip title='Отчети'>
              <IconButton style={{ color: 'white' }}>
                <AssessmentOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
        <div className='place-self-center h-[40px]'>
          <Link to='/tender'>
            <Tooltip title='Объявление'>
              <IconButton style={{ color: 'white' }}>
                <WhatshotOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
        <div className='place-self-center h-[40px]'>
          <Link to='/setting'>
            <Tooltip title='Настройка'>
              <IconButton style={{ color: 'white' }}>
                <SettingsOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
      </div>
      <div className='place-self-center mb-8 h-[40px]'>
        <Link to='/help'>
          <Tooltip title='Справка'>
            <IconButton style={{ color: 'white' }}>
              <HelpOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
