// 16.8버전 이후로 함수형에서 state 사용가능
import { useState } from "react";

// css파일 들고오기
import './arrowState.css'

// 현재 컴포넌트에서 전역변수로 쓸 변수
// 화면의 업데이트에 상관없이 사용하는 변수
let globalId = 4;

/** 함수형 컴포넌트의 특징
 *  1) this를 사용하지 않는다
 *  2) 안에 값을 넣어줄때 변수로 할당하므로 const나 let 사용
 */

const ArrowState = () => {
    // useState는 항상 함수(컴포넌트)안에 작성
    const [message, setMessage] = useState(
        {
            time: "10:53",
            text: "메시지 입니다"
        });
        // useState는 여러번 사용할 수 있다

        const [number, setNumber] = useState(0);
        const [array, setArray] = useState([1,2,3,4]);

        const [students, setStudents] = useState(
            [
                {id:1, name: "tiger", checked: true},
                {id:2, name: "cat", checked: false},
                {id:3, name: "dog", checked: false}
            ]
        )
        

    // 학생이름을 받아올 공간
    const [inputName, setIntputName] = useState("");
    
    /* 클래스 형에서 render()안에 값이 계속 초기화 
        함수형 클래스에서는 함수 안에 있는 내용이 계속 초기화*/

    let id = 4;


    // 메소드 작성
    const inputChange = (e)=>{setIntputName(e.target.value)};

    const addStudent = ()=>{
        // 값을 받아와서 새로운 배열로 만들기
        // 새로운 배열 students 할당
        const newStudents = students.concat(
            {
                id:globalId,
                name : inputName
            }
        );
        globalId++;
        setStudents(newStudents);
        setIntputName("");
    }

    // id 값을 전달하여 메소드 안에서 사용
    const removeStudent = (id) =>{
        const updateList = students.filter((student)=>student.id !== id);
        setStudents(updateList);
    }

    

    return(
        <div>
            <p>
                {number}
                {message.text}
            </p>
            <button 
                /** useState로 작성한 함수를 통해서 값을 넣어줄때 그 값의
                    자료형이 같지않아도 넣어준다 
                    작성할때 그 값의 자료형을 확인하고 동일한 형태로 할당
                    객체의 일부분만 수정해서 넣을때 사용하는 연산자  ... (스프레드 연산자 사용)
                    : 객체나 배열안에 있는 값(요소)를 꺼내서 사용 
                    객체에서 동일한 속성이름을 사용하면 마지막에 적은 값 사용 */
                onClick={()=>{setMessage({...message, text:"수정된내용"})}}>
                글자값 수정
            </button>
            {
                array.map((num,i)=><li key={i}>{num}</li>)
            }
            <h3>학생추가</h3>
            <input type="text" 
                    onChange={inputChange}
                    value={inputName} /> {/** 빈 문자열로 변경 */}
            <button onClick={addStudent}>
                추가
            </button>
            <ul>
                {
                    students.map((student)=>
                    <li 
                        key={student.id}
                        className = {student.checked ? "on" : ""}
                        // 클릭했을때 배열 삭제 > 클래스형 컴포넌트 내용 참고
                        //이벤트 핸들러에 함수를 전달할 때, 함수의 인자를 전달하려면 화살표 함수를 사용해야함
                        
                    >
                        <input type="checkbox" checked={student.checked} readOnly 
                                    onClick={()=>{
                                        // 체크박스 클릭하면 클릭한 객체의 checked 값이 바뀜
                                        // map을 이용하여 작성
                                        // map(): 배열안의 요소의 값을 return을 통해 새로운 배열로 만듬
                                        // 클릭한 객체를 찾았다면 > 그 객체의 checked 값을 수정해서 return
                                        const newStudents = students.map((s)=>{
                                            /* s를 통해서 각각의 객체값 확인 가능
                                                1) 클릭한 체크박스의 id값과 모든 s의 id와 비교해서 
                                                2) id 값이 같지않다면 원래 객체의 값을 넣어주고
                                                3) id 값이 같다면 체크의 값을 !를 이용해서 수정한 객체를 넣어준다*/
                                            if(student.id !== s.id){
                                                return s;
                                            }
                                            else{
                                                /* 원래 객체에서 checked 값만 수정하기 위해서 s안에있는 속성을 ...(스프레드 연산자)를 이용해서 추가
                                                    수정할 속성인 checked를 작성해서 수정*/
                                                return {...s, checked: !s.checked} // 체크 부분만 수정
                                            }
                                        })
                                        setStudents(newStudents);
                                    }}/>
                        {student.id}, name: {student.name}
                        <button onClick = {()=>removeStudent(student.id) }>
                            ❌
                        </button>
                    </li>
                    )
                }
            </ul>
        </div>
        
    )
}

export default ArrowState;