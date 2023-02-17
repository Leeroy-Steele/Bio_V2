import Navbar from './components/navbar'
import './App.css';
import Bio from './components/Bio'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f49b44',
      // background:"#2d2b2a",
      background:"orange",
      text:"#f0ede8",
    },
    secondary: {
      main: 'rgb(1, 145, 255)',
      background:"rgb(1, 145, 255)",
      text:"#f0ede8",
    },
    info: {
      main: '#f0ede8',

    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Bio/>
        <Portfolio/>
        <Resume/>
        <Hobbies/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
