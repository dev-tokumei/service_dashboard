import React from 'react';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton, Tooltip } from '@mui/material';

const Header = ({ children }) => {
  return (
    <div className='w-full flex justify-between h-[60px] items-center pt-3 p-2 bg_color'>
      <h1 className='w-[100px] font-bold text-[15px] '>{children}</h1>
      <div className='flex w-[250px] h-full justify-between items-center'>
        <Tooltip title='Уведомления'>
          <IconButton style={{ color: 'white' }}>
            <NotificationsActiveOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Обновление'>
          <IconButton style={{ color: 'white' }}>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
        </Tooltip>
        <p className='text-[14px] '>Smart Client Office</p>
        <IconButton style={{ color: 'wheat' }}>
          <AccountCircleOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
