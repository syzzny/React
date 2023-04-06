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
    const [allTodo, setAllTodo] = useState(
        [
            { idx : 0, date: `${months}월 ${days - 1}일`, name: "첫번째 할일", checked: true },
            { idx : 1, date: `${months}월 ${days}일`, name: "두번째 할일", checked: false }
        ]
    );

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
        const newTodo = allTodo.concat(
            {
                idx : allTodo.length+1,
                date: `${months}월 ${days}일`,
                name: inputList
            }
        );
        setAllTodo(newTodo);
        setInputList("");
        todayList();
    }

    const removeTodo = (idx) => {
        const updateTodo = allTodo.filter((todo) => todo.idx !== idx);
        setTodoList(updateTodo);
        todayList();
    }

    /*
    const allList = () => {
        setTodoList(todoList);
    };*/

    const todayList = () => {
        const todayList = allTodo.filter((t) => t.date === today);
        setTodoList(todayList);
    };

    const allList = () => {
        setTodoList(allTodo);
        
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

    return (
        <div>
            <h1>Todo-List</h1>

            {/** ----------------------추가----------------------- */}
            <input type="text"
                onChange={inputTodo}
                value={inputList} />
            <button onClick={addTodo}>
                +
            </button>
            <hr />

            {/** ----------------------button---------------------- */}
            <button onClick={allList}>
                모든 할일
            </button>
            <button onClick={todayList}>
                오늘 할일
            </button>

            {/**------------------------ list------------------------ */}
            <ul>
                {

                    todoList.map((todo) =>
                        <li key={todo.idx}
                            className={todo.checked ? "on" : ""}
                            style={{ textDecoration: todo.checked ? "line-through" : "none" }}
                        >
                            <br />{todo.date}<br /><br />
                            <input type="checkbox" checked={todo.checked} readOnly
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
                            <button onClick={() => removeTodo(todo.idx)}>
                                ❌
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default BodyComp;
