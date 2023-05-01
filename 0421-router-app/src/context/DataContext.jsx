import { createContext, useState } from "react";

// const DataContext = React.createContext();
// React 안에있는 createContext 함수를 따로 불러와서 사용
const DataContext = createContext();

const Dataprovider = ({children}) =>{
    const [fruitlist,setFruitlist] = useState(
        [
                {
                    name : "apple",
                    detail : "사과입니다",
                    picture : 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg'
        
                },
                {
                    name :"orange",
                    detail : "오렌지입니다" ,
                    picture : "https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117645_960_720.jpg"
        
                },
                {
                    name : "peach",
                    detail : "복숭아입니다" ,
                    picture : "https://cdn.pixabay.com/photo/2017/08/11/17/41/peach-2632182_960_720.jpg"
                }
            ]
    );

    const value = {
        state: {fruitlist},
        action: {setFruitlist}
    }
    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}
export {Dataprovider}
export default DataContext