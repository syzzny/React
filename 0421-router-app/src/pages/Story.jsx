import React from 'react'
import { useParams } from 'react-router-dom'

import DataContext from '../context/DataContext';
import { useContext } from 'react';

export default function Story() {
    const {state} = useContext(DataContext);
    const {fruitlist} = state;

    

    const {name} =useParams(); // 주소에 있는 값을 가져옴
    
    // find를 사용해서 하나만 출력
    // filter 값을 배열로 출력
    const fruit = fruitlist.find((f)=>(f.name === name))

    return (
        <div>
            <h3>{name}-Story</h3>
            {
                fruit && (
                    <div>
                        <img src={fruit.picture} alt="" width={200}/>
                        <p>{fruit.detail}</p>
                    </div>
                )
            }
        </div>
    )
}
