import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import LoginComp from './components/LoginComp';
import { Logintest } from './components/MyComponent';

import TextComp from './components/Textcomp';
import OtherComp from './components/OtherComp';
import StateComp from './components/StateComp';

import EventComp from './components/EventComp';

import RefDomEvent from './components/RefDomEvent';
import MapComp from './components/MapComp';

import LifeCycle from './components/LifeCycle';


/* 리액트에서 오류가 뜨는 이유
  1. 존재하지 않는 컴포넌트 출력
  (컴포넌트를 만든 이후에 이름은 가능하면 바꾸지말것)
  > 이름을 바꾼 후에는 바꾼 그 이름으로 모든 컴포넌트 수정
  2. {}를 닫지 않았을 경우
  >> 오류코드를 보면서 각 line에 있는 코드들을 주석/삭제 처리하면서 확인
*/

function App() {
  return (
    <div className="App">
      <h1>리액트 프로젝트를 수정해서 사용합니다</h1>
      <MyComponent/><Logintest />
      {/* 만든 컴포넌트에 값 부여*/}
      <LoginComp login={true} name="홍길동" />
      {/* 만든 컴포넌트 사이에 글자를 적어서 전달*/}
      {/* props의 children으로 전달*/}
      {/* props 값을 전달하지 않으면 undefined로 들어감*/}
      <LoginComp>내용전달</LoginComp>
      {/* 새로운 TextComp를 만들어서 children에 들어간 값을 h1 태그에 넣어서 출력하세요 
          name 값을 받아와서 p태그에 name님을 출력한다*/}
      <TextComp name="손예진">반갑습니다</TextComp>
      <TextComp name="예진">환영합니다</TextComp>
      <OtherComp name ={123}/>

      {/* State를 가진 컴포넌트 */}
      {/* State를 가진 컴포넌트는 다시 사용해도 별개의 값으로 들어간다 */}
      <StateComp/>
      <StateComp/>

      {/* event */}
      <EventComp/>

      {/* RefDom */}
      <RefDomEvent/>
      
      {/* 컴포넌트의 반복 */}
      <MapComp/>

      {/* 라이프사이클 */}
      <LifeCycle/>

    </div>
  );
}
// import를 이용하여 다른 파일에서 값을 가져올때 export를 이용해서 내보내는 값
export default App;
