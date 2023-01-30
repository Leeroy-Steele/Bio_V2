import Navbar from './components/navbar'
import './App.css';
import Bio from './components/Bio'
import Hobbies from './components/Hobbies'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Bio></Bio>
      <Hobbies></Hobbies>
    </div>
  );
}

export default App;
