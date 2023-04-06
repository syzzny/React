import React, { useState } from "react";

import './Body.css'

function BodyComp() {
    const date = new Date();
    const months = date.getMonth() + 1;
    const days = date.getDate();

    const today = `${months}월 ${days}일`;

    const [todoList, setTodoList] = useState(
        [
            { idx : 0, date: `${months}월 ${days - 1}일`, name: "첫번째 할일", checked: true },
            { idx : 1, date: `${months}월 ${days}일`, name: "두번째 할일", checked: false }
        ]
    )

    const [inputList, setInputList] = useState("");

    /*const printClock = (date) =>{
        
        return <span style={{fontWeight:"bold"}}>{`${months}월 ${days}일`}</span>
    }*/

    // 리스트 추가
    const inputTodo = (e) => { setInputList(e.target.value) };

    /*const addTodo = () => {
        const newTodo = {date: new Date(), name: inputTodo, checked: false};
        const updatedTodoList = [...todoList, newTodo];
        setTodoList(updatedTodoList);
        setInputList("");
    }*/

    const addTodo = () => {
        const newTodo = todoList.concat(
            {
                idx : todoList.length+1,
                date: `${months}월 ${days}일`,
                name: inputList
            }
        );
        setTodoList(newTodo);
        setInputList("");
    }

    const removeTodo = (idx) => {
        const updateTodo = todoList.filter((todo) => todo.idx !== idx);
        setTodoList(updateTodo);
    }

    /*
    const allList = () => {
        setTodoList(todoList);
    };*/

    const todayList = () => {
        const todayList = todoList.filter((t) => t.date === today);
       // setTodoList(todayList);
        setButtonState("today");
    };

    /*const allList = () => {
        setTodoList([
            { date: `${months}월 ${days - 1}일`, name: "첫번째 할일", checked: true },
            { date: `${months}월 ${days}일`, name: "두번째 할일", checked: false }
        ]);
    };*/
    
    const allList = () => {
        // 현재 todoList 상태값을 가져와서 설정
       // setTodoList(todoList);
        setButtonState("all");
    };
    


    /*const todayList =()=>{ todoList.filter(t => new Date() === t.date).map((todo, name) => {
        return (
            <li key={name}>
                <input type="checkbox" checked={todo.checked} />
                {todo.name}
            </li>
        );
    });
    }*/
    const [buttonState,setButtonState] = useState("all");
    const showList = buttonState=="all"? todoList : todoList.filter((t) => t.date === today);
    return (
        <div className="wrap">
            <h1 style={{color:"whitesmoke"}}>Todo-List</h1>

            {/** ----------------------추가----------------------- */}
            <input className="inputtext" 
                type="text"
                onChange={inputTodo}
                value={inputList} />
            <button className="addbutton" 
                onClick={addTodo}>
                ➕
            </button>

            {/** ----------------------button---------------------- */}
            <div className="allbutton">
                <button onClick={allList}>
                    All
                </button>
                <button onClick={todayList}>
                    Today
                </button>
            </div>
            {/**------------------------ list------------------------ */}
            <ul>
                {

                    showList.map((todo) =>
                        <li key={todo.idx}
                            className={todo.checked ? "on" : ""}
                            style={{ textDecoration: todo.checked ? "line-through" : "none" }}
                        >
                            {todo.date}<br />
                            <input className="checkbutton" type="checkbox" checked={todo.checked} readOnly
                                onClick={() => {
                                    const newTodo = todoList.map((t) => {
                                        if (todo.idx !== t.idx) {
                                            return t;
                                        }
                                        else {
                                            return { ...t, checked: !t.checked }
                                        }
                                    })
                                    setTodoList(newTodo);
                                }} />
                            {todo.name}
                            <button className="listbutton" onClick={() => removeTodo(todo.idx)}>
                                ✖
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default BodyComp;
