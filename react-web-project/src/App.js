import logo from './logo.svg';
import './App.css';

import Index from './components/Index'
import { Routes, Router, Route } from 'react-router-dom';
import ArtworkAll from './components/ArtworkAll';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/artworkall' element={<ArtworkAll/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
