import './App.css';
import PropsComp from './components/PropsComp';
import CountComp from './components/CountComp';
import CountPropsComp from './components/CountPropsComp';
import LoginComp from './components/LoginComp';
import MemoComp from './components/MemoComp';

function App() {
  return (
    <div className="App">
      {/** props를 사용하는 클래스컴포넌트 */}
      <PropsComp color="pink">props값을 받아와서 글자색을 변경</PropsComp>
      {/** state를 사용하는 클래스컴포넌트 */}
      {/** 버튼을 클릭할때마다 10씩 증가하는 컴포넌트 */}
      <CountComp />
      {/** props, state를 사용하는 클래스컴포넌트 */}
      {/** props의 num값을 가져와서 버튼을 클릭할때마다 num씩 증가 */}
      <CountPropsComp num={5}/>
      
      {/** LoginComp 작성 후
       * state : name , login : false
       * <input>에서 name 받아오기
       * <button>에서 login true 만들기
       * <h1> name 출력 > login 값이 true 일때 화면에 보여지기
       */}

    <LoginComp/>
    <MemoComp/>

    </div>
  );
}

export default App;
