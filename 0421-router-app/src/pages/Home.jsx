import React from 'react'
import logo from '../logo.svg'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <img src={logo} alt="" />
            <p>
                react와 router로 작성한 페이지입니다
                <br />
                환영합니다
            </p>
        </div>
    )
}
