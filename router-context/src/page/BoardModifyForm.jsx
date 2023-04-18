import React from 'react'
import { useState } from 'react'

import DataContext from '../context/DataContext';
import { useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

/* BoardWriteForm 컴포넌트는 Board 컴포넌트에서 수정버튼을 클릭했을때 id값을 가져와서
    boardlist의 객체값을 수정해서 작성하는 공간*/
// 1. id 값을 가져와서 boardlist의 객체값을 수정해서 작성하는 공간
// 2. 객체를 가져와서 boardlist의 객체값을 수정해서 작성하는 공간
// 아래 내용은 객체를 가져와서 진행
// 객체를 가져올때는 주소(params)를 이용할수 없다
// useNavigate에서 state를 통해 값 전달
// >> useLocation을 통해서 값을 받아올 수 있다.
// ** 1,2 모두 수정해서 쓰는 부분은 동일!
export default function BoarModifyForm() {

    const navigate = useNavigate();
    const location = useLocation();
    // 수정버튼을 누른 Board에서 받아온 객체
    // {id, title, content, date, writer}
    const boardData = location.state;


    // 사용자로 입력받아올 공간을 useState로 작성
    // >> todolIST에서 todo를 작성할 공간과 ,,?

    const [title, setTitle] = useState(boardData.title);
    const [content, setContent] = useState(boardData.content);



    // DataContext를 통해서 공용데이터 값,  메소드 들고오기
    const value = useContext(DataContext);
    const {state, action} = value;
    
    // 글 수정 메소드
    const modifyBoard = () =>{
        // 1. 수정된 객체 작성
        // 가져온 boardData와 수정한 title, content 사용
        // boardData의 모든 속성값을 가져오기 위해 ...(스프레드연산자) 사용
        const newBoard = {
            ...boardData,
            title,
            content
        }

        // 2. 배열을 들고와서 동일한 id에 객체를 바꿔서 새로운 배열생성
        // 동일하지않다면 이전 배열의 객체값 그대로 사용
        // (map()사용해서 수정)
        const newBoardlist = state.boardlist.map((board)=>(board.id === boardData.id ? newBoard:board))

        // 3. 새로운 배열을 set 메소드를 이용하여 추가
        action.setBoardlist(newBoardlist)

        // 수정한 Board로 이동해서 내용확인
        navigate(`/boardlist/${newBoard.id}`)
    }


    return (
        <div>
            <h3>BoardModifyForm</h3>
            <label htmlFor="">제목</label>
            <input type="text" 
                onChange={(e)=>{setTitle(e.target.value)}}
                // 현재 수정할 객체의 title 값
                value={title}/>
            <br />
            <textarea name="" id="" cols="30" rows="10"
                onChange={(e)=>{setContent(e.target.value)}}
                // 현재 수정할 객체의 content 값
                value={content}
            >    
            </textarea>
            <br />
            <button onClick={modifyBoard}>
                수정완료
            </button>
        </div>
    )
}
