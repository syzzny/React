import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// json 내용 대신에 
// DataContext에 있는 boardlist 들고와서 화면에 출력하기
import data from '../data/dummy.json'

import { useContext } from 'react';
import DataContext from '../context/DataContext';

// id로 구분하기위해 board에 data의 내용이 필요함
export default function Board() {
    // useNavigate를 사용하면 함수를 이용해서 화면이동가능
    const navigate = useNavigate();

    const { id } = useParams();

    // Context의 값을 가져옴 
    // 삭제를 위해 action속성도 가져옴
    const { state, action } = useContext(DataContext);
    const { boardlist } = state;

    // 배열의 함수인 find 를 이용하여
    // 함수의 조건이 참인 하나의 값을 가져온다 
    // find로 가져온값은 배열 안에 있는 하나의 값
    // find로 값을 찾지 못할 경우 undefined 출력
    // undefined의 값에 속성을 찾으려고하면 >> 오류!
    const boardData = boardlist.find((d) => (d.id == id))

    // useEffect를 사용해서 boardData값이 undefind면 
    // 오류 페이지 컴포넌트로 이동 혹은 목록으로 이동
    // 두번쨔 인자값이 빈 배열이라면 컴포넌트 생성시에 실행
    useEffect(() => {
        if (boardData == undefined) {
            navigate('/boardlist');
        }
    }, [])


    // 게시물 삭제 메소드
    const deleteBoard = () => {
        // 1. 현재 id를 들고온다 > useParam을 통해 가져온 id들고온다
        // 2. id와 동일한 객체를 제외한 새로운 배열을 만들다
        // (filter)
        // 일치 비교연산자 사용할때는 자료형까지 동일해야한다
        const newBoardlist = boardlist.filter((board) => (board.id !== Number(id)))

        // 3. 새로운 배열을 set메소드를 통해 넣어준다
        action.setBoardlist(newBoardlist);

        // 삭제 이후에 boardlist로 이동
        navigate('/boardlist');
    }


    return (
        <div>
            {   // 화면이 먼저 화면에 렌더되고, useEffect 실행
                // 화면 상에서 나타나는 오류를 제거하고
                // useEffect로 이동
                // boardData = undefined == false
                // boardData = 값있음 == true
                // >> 자동 형변환
                boardData && (
                    <div>
                        <h3>제목: {boardData.title}</h3>
                        <p>작성자: {boardData.writer}</p>
                        <p>내용 : {boardData.content}</p>
                        <p>날짜: {boardData.date}</p>
                    </div>
                )
            }
            {/** writer값이 같을때만 아래 버튼들 보이기-삼항연산자 
         * boardData의 값이 있을때 비교!
         * 먼저는 boardData가 있는지 확인한 후에 출력
         * >> 연달아서 확인하기위해 && 연산자 사용
         * 1) boardData가 있는지 확인 (있으면 T/없으면 F)
         * 2) writer 비교
        */}
            {
                boardData &&
                (state.user.writer === boardData.writer &&
                    <div>
                        <button
                            onClick={deleteBoard}
                        >
                            이 게시글 삭제
                        </button>
                        <button
                            // navigate의 state를 이용하여 boardData객체를 전달
                            onClick={() => { navigate('/board-modify-form', { state: boardData }) }}
                        >
                            이 게시글 수정하기
                        </button>
                    </div>)
            }

        </div>
    )
}