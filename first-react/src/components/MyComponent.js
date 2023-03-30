// 파일의 이름과 클래스 이름 동일하게 사용

// 클래스형 컴포넌트 
// react의 component를 상속받아와서 사용
// 상속을 받아와서 사용하게 되면 component의 내용을 사용가능
import {Component} from 'react'

class MyComponent extends Component {
    // 클래스형 컴포넌트의 특징
    // render 함수에서 return을 통해 html을 내보냄
    render(){
        // 변수작성
        const name = "React";
        // html 내용 출력
        return(
            <div>
                <Logintest/>
                <h1>Class형 Component입니다</h1>
                <p>{name}공부를 하고있습니다</p>
            </div>
        )
    }
}

// 하나의 컴포넌트 작성 파일안에 클래스형 또는 함수형 컴포넌트 여러개 작성가능
// exports로 내보내주지 않으면 사용할 수 없다

class Logintest extends Component{
    render(){
        //const login = true;
        // 클래스에서 props 값을 가져올때는 this.props를 통해 가져온다
        // this.props는 component에서 상속받아온 속성
        // this.props = {login:true, namd:"홍길동"};
        // 구조화 할당 : 배열이나 객체와 같이 값이 여러개인 자료형을 안에있는 요소를 꺼내서 각각의 변수에 따로 저장
        const prop = this.props;
        const {login, name} = this.props;
        console.log(prop.login);
        console.log(login);
        return(
            <div>
                <div>{login ? <div><h2>로그인에 성공하였습니다</h2>
                    <h3>손예진 입니다</h3></div> : <h2>로그인에 실패했습니다</h2>}
                    
                </div>
            </div>
        )
    }
}

// 다른 내용을 export를 통해 내보낼때 export{}를 사용해서 내보낸다
export {Logintest};
// 주로 하나의 컴포넌트 작성파일에서 하나의 컴포넌트를
export default MyComponent;