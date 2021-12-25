import {createTheme} from '@mui/material/styles';
import darkScrollbar from '@mui/material/darkScrollbar';

const lightTheme = createTheme({
    // palette: {
    //     primary: {
    //         main: '#19325c'
    //     },
    //     secondary: {
    //         main: '#ff9c1f'
    //     }
    // }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#19325c'
        },
        secondary: {
            main: '#ff9c1f'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: darkScrollbar(),
            },
        },
    },
});

export {lightTheme, darkTheme};
