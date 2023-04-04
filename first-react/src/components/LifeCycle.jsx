import React, { Component } from 'react'

//클래스형 컴포넌트에서 라이프 사이클 작성
export class LifeCycle extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            count:0,
            date: new Date()
        }
        // 속성 또는 필드라고도 이야기
        // 현재 컴포넌트에서 전역으로 사용하고싶을때
        this.timerID="";
    }

    // 라이프 사이클 메소드 - 마운트 되었을때: 시작했을때 실행되는 내용
    // 컴포넌트가 보이는 한번만 실행
    // 메소드 형태로 작성
    componentDidMount(){
        console.log("마운트가 되었습니다");
        //setInterval(()=>{this.tick()}, 1000);
        setInterval(this.tick,1000);
        // 처음 한번 실행하는 내용 작성
        // 또는 외부(공공데이터)에서 값을 한번만 가져올때
    }

    // 라이프 사이클 메소드 : 업데이트가 되었을때 : 화면이 바뀌었을때 
    // 현재 컴포넌트가 업데이트 될때마다 실행
    // props 의 값이 바뀔때, setState를 통해서 값이 바뀔때
    componentDidUpdate(){
        // 모든 업데이트 마다 실행할 내용 작성 가능
        console.log("업데이트가 되었습니다");
    }
    componentWillUnmount(){
        console.log("컴포넌트가 언마운트 되었습니다");
    }

    // 화면에 시간 출력 메소드
    printClock = (time) => {
        // 가능하면 this.setState 사용 x
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return `${hours}:${minutes}:${seconds}`
    }

    // 시간값을 다시 할당 메소드
    tick = () => {
        // setState를 사용할때마다 업데이트 발생
        this.setState({date:new Date()})
    }

    
    render() {
        return (
            <div>
                <h3>Life Cycle</h3>
                <h3>{this.state.count}</h3>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>
                    +1
                </button>
                <hr />
                <h3>시계{this.printClock(this.state.date)}</h3>
            </div>
        )
    }
}

export default LifeCycle