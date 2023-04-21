import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Index.css';
import dummy from '../data/dummy.json';

export default function Story() {
    const [fruitList, setFruitList] = useState([]);
    const [selectedFruitIndex, setSelectedFruitIndex] = useState(-1);

    useEffect(() => {
        const fruitNames = dummy.map((fruit) => fruit.name);
        setFruitList(fruitNames);
    }, []);

    const handleFruitClick = (index) => {
        setSelectedFruitIndex(index);
    };

    return (
        <div className="wrap">
            <div className="nav">
                <NavLink exact to="/" activeClassName="active">
                    Home
                </NavLink>
                <NavLink exact to="/story" activeClassName="active">
                    Story
                </NavLink>
            </div>
            <div className="main">
                <div className="mainname">
                    <h3>StoryList</h3>
                </div>
                <div className="fruitlist">
                    <ul className="fruitnamelist">
                        {fruitList.map((name, index) => (
                            <li
                                key={index}
                                className={selectedFruitIndex === index ? 'active' : ''}
                                onClick={() => handleFruitClick(index)}
                            >
                                <a href="#">{name} story</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {selectedFruitIndex >= 0 && (
                    <div className="fruit-image">
                        <h4 className="listname">{dummy[selectedFruitIndex].name}-Story</h4>
                        <img src={dummy[selectedFruitIndex].picture} alt="fruit" />
                        <p>{dummy[selectedFruitIndex].detail}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
