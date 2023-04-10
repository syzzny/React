import { useState } from 'react';
import './TodoComp.css'


// TodoComp에서 전역으로 사용할 변수
let globalId = 3;

const TodoComp = () => {

    // TodoComp에서 사용할 데이터
    // inputTodo : input 통해서 가져올 값
    // todolist : todo를 저장할 배열
    // {id : 1, todo: "첫번째 할일",
    // checked: false, date:new Date("2023-04-06")} 

    const [todoList, setTodoList] = useState(
        [
            { id: 1, todo: "첫번째 값", checked: false, date: new Date("2023-04-06") },
            { id: 2, todo: "두번째 값", checked: true, date: new Date() }
        ]
    );

    //input의 값을 받아와서 넣을 공간
    const [inputTodo, setInputTodo] = useState("");

    const onInputChange = (e) => { setInputTodo(e.target.value) };


    // ----------------------------- addTodo ------------------------------
    const addTodo = (e) => {
        // form의 submit 이벤트는 새로고침을 실행한다
        e.preventDefault();
        // 배열에 새로운 todo추가 => concat() 사용
        // 새로운 배열을 만들어서 setTodoList로 값 할당
        const newTodoList = todoList.concat(
            {
                id: globalId,
                todo: inputTodo,
                date: new Date(),
                checked: false
            }
        );
        globalId++;
        // state의 값이 바뀌면 업데이트 => 화면 수정
        setTodoList(newTodoList);
        setInputTodo("");
    }

    // ----------------------------- delete ------------------------------
    // const deleteTodo =()=>{ => 아래처럼 변경
    const deleteTodo = (id) => {
        //todoList에서 선택한 id를 제외한 배열(!==)
        //filter() 함수 이용
        // 참이면 출력O / 거짓이면 출력X
        // map안에 todo라는 이름을 사용하고 있기때문에 매개변수명을 t로 작성
        // 함수 안쪽에서만 쓰기때문에 동일한 변수명 사용가능
        // const newTodoList = todoList.filter( (t)=>(t.id) !== todo2.id) => 아래처럼 변경
        const newTodoList = todoList.filter((t) => t.id !== id)
        setTodoList(newTodoList)
    }


    // ----------------------------- checked ------------------------------
    // const checkedTodo =()=>{
    const checkedTodo = (id) => {
        // map을 이용해서 요소의 값 수정 => return값 배열로 들어감
        // id값을 이용해서 동일한 id값이라면 수정, 아니라면 원래 객체(t)
        // 삼항연산자로 작성
        const newTodoList = todoList.map(
            // (t)=> t.id === todo2.id ?
            (t) => t.id === id ?
                // checked의 값 반대로
                { ...t, checked: !t.checked } : t
        )
        // 작성 후 아래 내용을 설정해주어야 설정됨
        setTodoList(newTodoList);
    }

    //////////////////////////////////////////////////////////////////////

    // 데이터값을 확인하기위해 화면의 HTML 구성
    // 데이터 값만 확인 - HTML 뼈대
    // 레이아웃 구성 확인 - CSS 함께
    return (
        <div>
            <h1>Todo-List</h1>
            {/* submit을 통해서 이벤트 실행 : 마지막 input에서 엔터 눌렀을 때 실행 */}
            {/* <p>{inputTodo}</p> */}
            {/* submit을 통해서 이벤트 실행 */}
            <form
                onSubmit={addTodo}
            >
                {/* ----------------------------- addTodo ------------------------------ */}
                <input
                    type="text"
                    onChange={onInputChange}
                    value={inputTodo}
                />
                <input type="submit" value="+" />
            </form>


            <br />
            <hr />
            <br />

            <ul>
                {
                    // 배열을 사용할 때 map을 사용해서 출력
                    todoList.map((todo2) => (
                        <li key={todo2.id}>
                            <h3>
                                {todo2.date.getMonth() + 1 + "월" + todo2.date.getDate() + "일"}
                            </h3>
                            <input
                                type="checkbox"
                                checked={todo2.checked}
                                // console 오류 내용
                                // 2react-dom.development.js:67 Warning: You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.
                                // at input
                                // at li
                                // at ul
                                // at div
                                // at TodoComp (http://localhost:3000/static/js/bundle.js:109:82)
                                // at div
                                // at App
                                readOnly
                                // ----------------------------- checked ------------------------------
                                onClick={() => { checkedTodo(todo2.id) }}
                            />
                            {todo2.id}
                            {todo2.todo}
                            <button
                                // ----------------------------- delete ------------------------------
                                // onClick={deleteTodo} => 아래처럼 변경
                                // todo2.id 값을 가져와주고 화살표 함수로 감싸줘야함
                                onClick={() => { deleteTodo(todo2.id) }}
                            >
                                X
                            </button>
                        </li>
                    ))
                }
            </ul>

            <div className='imgtest'>
                <div className='logoimg'>
                    <img src="../moca_logo.jpg" alt="" />
                </div>
            </div>
        </div>
    );

}

export default TodoComp;