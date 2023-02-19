import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#69f0ae',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            paddingLeft: 10,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: `1px solid grey`,
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: `2px solid #69f0ae`,
            },
          },
          '&:hover .MuiOutlinedInput-notchedOutline ': {
            borderColor: 'rgb(250, 232, 241)',
          },
        },
      },
    },
  },
});
