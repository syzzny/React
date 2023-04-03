import React, { Component } from 'react'

export class MemoComp extends Component {

    constructor(props){
        super(props);
        this.state ={
            memoList : [
                {id:1, memo: "기록", time: new Date()},
                {id:2, memo: "연습", time: new Date()}
            ], 
            inputText: ""
        }
        this.id = 3;
    }

    addMemo = () =>{
        const newMemo = this.state.memoList.concat({
            // ++는 후위연산자로 값을 할당 (모든 연산)이 끝난 후에 값을 1증가 시킨다
            id: this.id++,
            memo: this.state.inputText,
            //time: this.time
            time: new Date()
        }
        )
        this.setState({memoList:newMemo});
    }

    removeMemo = (id) => {
        const updatedList = this.state.memoList.filter((memo) => memo.id !== id);
        this.setState({ memoList: updatedList });
    };

    // 시간값을 편하게 출력하기 위한 메소드 출력 return을 통해서 화면에 출력가능
    // 시간을 출력하기 위해 time 값 가져옴
    printClock = (time) => {
        // 가능하면 this.setState 사용 x
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return `${hours}:${minutes}:${seconds}`
    }

    
    render() {
        return (
            <div>
                <h3>MEMO LIST</h3>
                <ul>
                {
                    this.state.memoList.map((memo) => 
                        <li key={memo.id} onClick={()=>this.removeMemo(memo.id)}>{memo.id}. {memo.memo} time:{this.printClock(memo.time)}</li>)
                }
                </ul>

                <input type="text" 
                        onChange={(e)=>{this.setState({inputText:e.target.value})}} 
                        value ={this.state.inputText}
                        />
                <button onClick={this.addMemo}>
                    추가
                </button>    
            </div>
        )
    }
}

export default MemoComp