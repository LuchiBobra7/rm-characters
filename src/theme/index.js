import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Nunito, serif' ].join(',')
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
      contrastText: '#fff',
    }
  },
  shape: {
    borderRadius: 5
  }
});

export default theme;