import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function ContextBox() {
    return (
        <div>
            <ContextText></ContextText>
        </div>
    )
}

function ContextText(){
    // userContext() ThemeContext를 가져와서 출력하기
    const theme = useContext(ThemeContext)
    return <p>{theme}</p>
}
