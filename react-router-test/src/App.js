import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'

import Home from './page/Home'
import Story from './page/Story';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/story' element={<Story/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
