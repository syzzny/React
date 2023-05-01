import React from 'react'

import DataContext from '../context/DataContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useRef } from 'react';

export default function MyPage() {
    const {state, action}= useContext(DataContext);

    const [show, setShow] = useState(false);
    // DOM에 접근하기 위해서 리액트에서 id 대신 사용하는 useRef
    // id 대신에 useRef를 사용하는 이유
    // : id값으로 접근하면 return의 화면이 다 호출된 뒤에 접근
    // >> useEffect를 이용해서 마운트 후에 id접근
    // useRef를 사용하면 바로 작성을해도 마운트 후에 값을 가져옴

    // react는 가상돔이기 때문에 render이후에 return태그들이 화면에 출력
    const prePic = useRef();

    // 좋아요 삭제 메소드
    // 1. 삭제할 id를 찾는다
    // 2. 삭제할 id를 제외하고 새로운 배열을 만든다(filter)
    // 3. 새로운 배열을 set~ 메소드를 이용하여 넣는다
    const deleteLike = (id) => {
        const newLikelist = state.likelist.filter((like)=>(like.boardId !== id));
        action.setLikelist(newLikelist);
    }

    // 프로필 이미지를 바꾸는 메소드 >> 모달창 사용하는 방식
    const changeProfile = () =>{
        setShow(true)
        // 1. 사진을 선택하는 창 출력
        // 2. 그 사진을 선택하면 프로필 사진이 바뀜
        // (set메소드를 이용하여 user.profile의 값이 수정)
    }

    // input 태그안에 있는 file의 값을 가져오는 메소드
    // input 태그 안에있는 값을 가져오기 위해 e(이벤트 객체) 사용
    const onLoadFile = (e) =>{
        // 이벤트 객체의 파일배열중 0번째 인덱스 값 사용
        console.log(e.target.files[0])
        // URL.createObjectURL()을 이용하여 파일의 값을 변형해서 사용
        // 나중에 DB에서도 저장해서 사용가능

        /** URL createObjectURL에서 오류 발생
         *  typeError : 잘못된 값이 들어갔을때 생기는 오류
         *  >> 확인하니 값을 선택하지 않았을때 undefined가 들어감
         * 해결방법 생각하기
         * 1) undefined 값이 들어왔을때 다른 값으로 수정해서 넣기
         * 2) undefined가 들어왔을때 메소드(함수) 중지
         * 
         * 메소드 중지를 하는 방법 : return을 실행하면 메소드가 종료
         */

        if(e.target.files[0] === undefined){
            // return을 사용하여 메소드 종료
            return -1;
        }

        // user.profile에 넣어서 사용
        action.setUser(
            {
                ...state.user,
                profile : URL.createObjectURL(e.target.files[0])
            }
        )

        // useRef로 들고온 미리보기 div를 들고와서 style의 backgroundImage
        // 바꿔서 출력 
        console.log(prePic);
        prePic.current.style.backgroundColor="cover";
        prePic.current.style.backgroundImage=`url(${URL.createObjectURL(e.target.files[0])})`
    }


    return (
        <div>
            <h3>MyPage</h3>
            <div>
                <img src={state.user.profile} alt="프로필 사진" width={200}
                    style={{borderRadius:"200px"}}/>
                <button onClick={changeProfile}>
                    프로필 수정
                </button>
                {/* onChange를 이용하여 들고오는 사진이 바뀔때마다 실행
                  * 실행하면서  input 값을 가져오기 위히ㅏㅁ
                  * input type="text" 에서 값을 들고온것과 유사*/}
                <input type='file' onChange={onLoadFile}/>
            </div>
            <h5>{state.user.writer}'s Page</h5>
            <hr />
            <h5>Like list</h5>
            <ul>
                <li>게시글 제목</li>

                {/* 배열의 있는 값을 가져와서 map을 이용해 반복 */}
                {
                    state.likelist.map((like)=>(
                        <li key={like.boardId}>
                            <Link to={`/boardlist/${like.boardId}`}>{like.title}</Link>
                            <button onClick={()=>{deleteLike(like.boardId)}}>삭제</button>    
                        </li>
                    ))
                }
            </ul>

            {/* 모달창 사용하기위한 공간 
              * 모달창의 형태 : 전체화면에 출력되는 창
              * 디자인은 먼저 넣어주는 것 : 전체화면에 출력되기 때문*/}
            <div className='modal-background'
                style={{
                    width:"100%",
                    height:"100vh",
                    backgroundColor : "rgba(0,0,0,0.3)",
                    position: "fixed",
                    top:"0",
                    // 모달창 화면을 display의 값에 따라 수정
                    // > useState로 작성하여서 화면에 출력
                    // show를 이용해서 T/F 
                    display: show ? 'block' : 'none'
                }}>
                <div className='modal'
                    style={{
                        width:"80%",
                        height:"300px",
                        backgroundColor:"#fff",
                        borderRadius:"8px",
                        margin: "auto",
                        marginTop: "250px",
                        padding: "30px 10px"
                    }}>

                    {/* 미리보기 이미지 > img태그를 통해 가져와도 무방  
                      * div의 backgroundImage를 통해 가져오기
                      *
                      * ✔ 이미지값을 넣어주기 위해 div의 ref를 지정하여
                      * DOM으로 들고와서 지정 
                      * 이미지값을 useState로 저장해서 값이 있을때 
                      * backgroundImage에 출력(modal 참고)*/}
                    <div ref={prePic} 
                        style={{
                        width: "300px",
                        height: "300px",
                        backgroundColor: "lightgrey"

                    }}>

                    </div>

                    <input type="file" onChange={onLoadFile} />
                    <button onClick={()=>{setShow(false)}}>
                        닫기
                    </button>
                </div>
            </div>
        </div>
    )
}
