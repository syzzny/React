import React, { Component } from 'react'

/*
export class LoginComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            login: false,
        };

        this.NameChange = this.NameChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    NameChange(e) {
        this.setState({name: e.target.value});
    }

    handleLogin() {
        this.setState({login: true});
    }

    NickName() {
        if (this.state.login) {
            return <p>{this.state.name}</p>;
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <p>이름을 입력하세요</p>
                {this.NickName()}

                <input type="text" 
                        onChange={this.NameChange} />

                <button onClick={this.handleLogin}>Log in</button>
            </div>
        );
    }
}
*/

export class LoginComp extends Component {

    constructor(props){
        // state 생성
        super(props);
        this.state = {
            name : "",
            login : false
        }
    }

    // inputChange
    inputChange = (e)=>{this.setState({name:e.target.value})}

    // loginMethode
    loginMethode = ()=>{this.setState({login:true})}

    render() {
        const {name, login} = this.state;

        return (
            <div>
                {/** className = {login ? "on":""} 클래스네임을 이용해서 디자인 추가 */}
                <h1 style={ login ? {display : "block"}:{display : "none"}}>
                    {name}
                </h1>
                <div style = {{display: login ? "none" : "block"}}>
                    <p>이름을 입력하세요</p>
                    <input type="text"
                            onChange={this.inputChange} />
                    <button onClick={this.loginMethode}>확인</button>
                </div>
            </div>
        )
    }
}

export default LoginComp