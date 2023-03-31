import React, { Component } from 'react'

export class EventComp extends Component {

    // state 작성
    constructor(props){
        super(props);
        this.state = {
            name : "냥냥냥냥!",
            address : "Busan",
            toggle : true,
            color : "",
            input : "",
            inputNickname : "",
            inputBook: ""
        }
        // 메소드에 .bind로 묶어서 this 전달
        // 아래 this. printEvent는 작성한 메소드
        // 그 메소드에 .bind(this)로 연결
        this.printEvent = this.printEvent.bind(this);
        // this.printEvent 이름
        // 참고) let num=0; num = num+1; >> num의 결과 :1
        this.printEventAdd = this.printEventAdd.bind(this);
        this.setToggle = this.setToggle.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    // 이벤트 안에서 작성한 함수 그대로 들고와서 사용할 수 있다
    // render에서 사용한 값을 쓸수없다
    // this.state.name을 통해서 접근
    // 메소드에 바로 bind를 통해서 this를 묶어줄수없다
    //메소드만 만들어서 바로 사용하면 this를 찾지못해서 오류
    // * >> constructor에서 bind로 묶어서 사용
    printEvent(){console.log("이벤트 출력");
                    // name 값을 render에서 this.state 값을 가져와서 this를 연결하지 않아도 사용가능
                    console.log(this.state.name);}
                    
    printEventAdd(){
        console.log("이벤트 완료");
        console.log(this.state.address);
    }

    // this.setState 사용해서 값 수정
    setToggle(){
        this.setState({toggle: !this.state.toggle})
    }
    
    changeColor(e){
        // e : 이벤트 객체를 들고와서
        // e.type을 통해서 setState에 값 다르게 넣을수 있다
        // onMouseLeave에 changeColor를 추가하여  onMouseLeave 이벤트가 발생했을때는 color : "" 연습해보기
        if(e.type === "mouseenter"){
            this.setState({color:"pink"});
        }
        else if(e.type === "mouseleave"){
            this.setState({color:""});
        }
        console.log(e.type);
    }

    // 화살표 함수를 가지는 메소드
    // 메소드 이름에 화살표 함수 작성
    arrowPrint = () => {
        console.log("이벤트 실행");
        console.log(this.state.name);
    }

    changeName = () => {
        this.setState({name:"뿌엥"});
    }

    //onChange 공용메소드
    onInputChange = (e) => {
        // inputNickname을 그대로 사용 > inputNickname에만 값이 들어간다
        // e.target.name : name 속성값을 가져와서 사용
        // 변수값을 사용하려면 [] 사용가능
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        // render 안에서 this = EventComp;
        // this.state는 construct의 속성값
        const {name, address} = this.state;
        return (
            // 이벤트를 위한 버튼 작성
            // console.log("이벤트 실행")
            <div>
                <h3>버튼을 클릭했을때 console.log("이벤트실행")</h3>
                {/** 실행할 함수 내용이 짧을때 화살표함수를 이용하여 바로 작성, 
                 * 이벤트 객체 사용가능
                 * this를 사용했을때 자기 자신 클래스 컴포넌트 호출 
                 * > 클래스컴포넌트에서 사용하는 props와 state 호출*/}
                <button onClick={(e)=>{console.log(e, this)}}>화살함수를 사용해서 이벤트 실행</button>
                
                {/** 익명함수를 사용해서 이벤트 객체 사용가능 
                 * this를 사용하면 연결된 객체가 없으므로 undefined 사용
                 * html 파일에서 js 익명함수를 들고오면 window 객체로 들고오지만 react에서 
                 * 익명함수를 들고오면 this의 값이 undefined이다
                 * react에서 익명함수를 사용하려면 함수의 this값을 연결
                 * this 값을 연결하기 위해 .bind()
                 * return 안에서 .bind(this) 불러오는 this = EventComp
                */}
                <button onClick={function(e){console.log(e)}}>익명함수를 사용해서 이벤트 실행</button>
                <h3>이벤트의 함수(메서드)를 따로 작성하는 방법</h3>
                <p>
                    버튼을 눌렀을때 console.log(이벤트 출력)
                    this.state.name "냥냥냥냥!" 작성 후 출력
                </p>
                <button onClick={function(){console.log("이벤트 출력");
                    // name 값을 render에서 this.state 값을 가져와서 this를 연결하지 않아도 사용가능
                    console.log(name);}.bind(this)}>
                    메소드로 사용한 이벤트
                </button>
                <button 
                    // 작성한 메소드를 들고올때 this.를 통해 가져옴
                    onClick={this.printEvent}>
                    메소드로 사용한 이벤트
                </button>
                {/** 이벤트 : 메소드 만들기 실습 */}
                <p>
                    버튼을 누르면 state의 adress 부산을 출력하고 console.log를 이용하여 이벤트 완료 출력
                </p>
                <button onClick={this.printEventAdd}>
                    event
                </button>
                <button onClick={function(e){console.log(this.state.adress);console.log(e.type, "이벤트 완료")}.bind(this)}>event</button>

                {/** this.setState를 사용하는 메소드 
                 * true - on / false - off */}
                <button onClick={function(){
                    this.setState({toggle: !this.state.toggle})
                }.bind(this)}>
                    {this.state.toggle ? "on" : "off"}
                </button>
                <button onClick={this.setToggle}>
                    {this.state.toggle ? "on" : "off"}
                </button>

                {/** state 의 color : "" 추가 후  
                 * changeColor 메소드를 만들고, 메소드에서 this.state.color값을 "pink"로 수정 */}
                <p onMouseEnter={this.changeColor}
                    onMouseLeave={this.changeColor}
                    style = {{color:this.state.color}}>
                    p 태그에 마우스를 올리면 글자를 빨간색으로 바꾸기
                </p>

                {/** 화살표함수로 메소드 만들어서 사용하기 */}
                <button 
                    onClick={()=>{
                        console.log("이벤트 실행");
                        console.log(this.state.name);
                    }}>
                    화살표 함수를 사용한 event
                </button>
                <button 
                    onClick={this.arrowPrint}>
                    화살표 함수를 사용한 event
                </button>
                {/** 화살표 함수를 이용해서 버튼을 클릭했을때 name 값을 성춘향으로 바꾸기 */}
                <button onClick={this.changeName}>{name}</button>

                {/** form - input 태그의 값 사용하기 */}
                <h3>input 태그에서 값을 가져올 state를 onChange를 사용해서 수정</h3>
                <p>{this.state.input}</p>
                <input type="text" onChange={(e) =>{
                    console.log(e.target.value)
                    this.setState({input:e.target.value})
                    // setState는 비동기 움직임으로 바로 state에 접근해서 값을 출력하면 이전값이 나온다
                    console.log("input",this.state.input);
                }}/>
                
                {/** change 공용함수 만들기 : 사용하지 않아도 상관 x*/}
                <h3>input 2개에서 값 받아오기</h3>
                <p>inputNickname의 값 : {this.state.inputNickname}</p>
                <input name='inputNickname' type="text" 
                        onChange={this.onInputChange}/>
                <p>inputBook의 값: {this.state.inputBook}</p>
                <input name='inputBook' type="text" 
                        onChange={this.onInputChange}
                />
            </div>
        )   
    }
}

export default EventComp