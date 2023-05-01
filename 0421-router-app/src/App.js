import logo from './logo.svg';
import './App.css';
import './style.css'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import NavHeader from './components/NavHeader';
import StoryList from './pages/StoryList';
import Story from './pages/Story';
import { Dataprovider } from './context/DataContext';

function App() {
  return (
    <Dataprovider>
      <div className="App">
        <NavHeader />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='storylist' element={<StoryList />}> {/** 중첩 라우트 */}
            <Route path='/storylist/:name' element={<Story />} /> {/** useParams 을 사용하기 위해 :name 사용 */}
          </Route>
        </Routes>
      </div>
    </Dataprovider>
  );
}

export default App;
