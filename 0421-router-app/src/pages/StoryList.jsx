import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function StoryList() {
    return (
        <div>
            <h1>StoryList</h1>
            <Link to='/storylist/apple'>appleStory</Link>
            <Link to='/storylist/orange'>orangeStory</Link>
            <Link to='/storylist/peach'>peachStory</Link>

            <Outlet /> {/** 중첩 라우트 나타날 위치 지정해줄때 사용 */}
        </div>
    )
}
