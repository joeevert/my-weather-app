import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#4fc3f7',
      main: '#039be5',
      dark: '#01579b',
      contrastText: '#ffffff',
    },
    // secondary:{
    //   light: '#19C3FB',
    //   main: '#1C9CF6',
    //   dark: '#1D71F2',
    //   contrastText: '#ffffff',
    // }
  },
});

export default theme;