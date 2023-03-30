import {Component} from "react"
class LoginComp extends Component {
    render() {
        // 변수 작성
        // 클래스에서 props 값을 가져올때는 this.props을 통해들고온다
        // this.props은 Component에서 상속받아온 속성
        // this.props = {login:true, name:"홍길동"};
        // 비구조화 할당(구조 분해)
        // : 배열이나 객체와같이 값이 여러개인 자료형을
        // 안에 있는 요소를 꺼내서 각각의 변수에 따로 저장하는 방식
        const prop = this.props;
        // 객체의 속성이름과 동일하게 적어서 할당가능
        const {login, name, children} = this.props;
        console.log(prop);
        console.log(prop.login);
        console.log(login);
        console.log(name);
        // const login = true;
        return (
            <div>
                <h1>{name}</h1>
                <p>{children}</p>
                { 
                    login ?
                    <LoginText />
                    :
                    <div>
                        <h1>로그인이 필요합니다</h1>
                        <p>리액트를 시작합니다</p>
                    </div>
                }
            </div>
        );
    }
}

// 하나의 컴포넌트 작성 파일안에 
// 클래스형 또는 함수형 컴포넌트를 여러개 작성할수 있다.
// export 를 이용하여 내보내주지 않으면 
// 외부에서는 사용할수 없다
class LoginText extends Component {
    render() {

        return (
            <div>
                <h1>로그인에 성공하였습니다</h1>
                <h3>홍길동입니다</h3>
            </div> 
        );
    }
}

// 여러개의 내용을 export를 통해 내보낼때
export { LoginText };

// 주로 하나의 컴포넌트 작성파일에서 하나의 컴포넌트를 내보낸다
export default LoginComp;