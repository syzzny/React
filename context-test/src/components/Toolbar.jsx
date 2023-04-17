import React from 'react'
// context의 값을 사용하고자하는 공간에 작성한 ThemeContext 가져옴
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react';

import ObjectContext from '../context/ObjectContext';
import DataContext from '../context/DataContext';

export default function Toolbar(props) {
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    )
}

// 클래스형 컴포넌트로 전달
class ThemedButton extends React.Component {
    /* 클래스형 컴포넌트에서 context값을 사용하기 위해서 contextType에 
    import해온 ThemeContext를 가져와서 쓸수있다*/
    static contextType = ThemeContext;
    render() { // 호출할때는 this.context를 통해서 호출
        return <MyButton theme={this.context} />
    }
}

function MyButton(props) {
    // ThemeContext를 통해서 값 받아오기
    const context = useContext(ThemeContext);
    // 객체로 전달된 값은 객체로 사용
    const user = useContext(ObjectContext);
    // DataContext에서 작성한 value의 값
    // {state: {name, login}, action:{set~, set~}}
    // 
    const value = useContext(DataContext);

    return <div>{
            user &&
            <button>{user.name}의 버튼</button>
        }
        {
            value &&
            <button>{value.state.name}의 버튼</button>
        }
    </div>
    

}
