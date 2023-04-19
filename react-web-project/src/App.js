import logo from './logo.svg';
import './App.css';

import Index from './components/Index'
import { Routes, Router, Route } from 'react-router-dom';
import ArtworkAll from './components/ArtworkAll';
import ArtworkInfo from './components/ArtworkInfo'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/artworkall' element={<ArtworkAll/>}></Route>
        <Route path='/artworkinfo' element={<ArtworkInfo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
