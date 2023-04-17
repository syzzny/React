import logo from './logo.svg';
import './App.css';

import Toolbar from './components/Toolbar';

import React from 'react';



// App에서 쓰기위해, 작성한 ThemeContext 호출
import ThemeContext from './context/ThemeContext';
import ObjectContext from './context/ObjectContext';
import DataContext, { DataProvider } from './context/DataContext';
import ContextBox from './components/ContextBox';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value='light'>
      <ObjectContext.Provider value={{name:"손예진", login:true}}>
        <Toolbar />
        </ObjectContext.Provider>
      </ThemeContext.Provider>

      <DataProvider>
        <Toolbar/>
      </DataProvider>

      {/** ContextBox를 가져와서 ThemeContext를 이용하여 blue 값을 전달 */}
      <ThemeContext.Provider value='blue'>
        <ContextBox/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
