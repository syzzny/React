import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../css/Index.css'

export default function Home() {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === '/') {
            setActiveLink('home');
        } else if (currentPath === '/story') {
            setActiveLink('story');
        }
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="wrap">
            <div className="nav">
                <Link
                    to="/"
                    className={activeLink === 'home' ? 'active' : ''}
                    onClick={() => handleLinkClick('home')}
                >
                    Home
                </Link>
                <Link
                    to="/story"
                    className={activeLink === 'story' ? 'active' : ''}
                    onClick={() => handleLinkClick('story')}
                >
                    Story
                </Link>
            </div>
            <div className="main">
                <div className="mainname">
                    <h3>Hello</h3>
                </div>
                <div className="logo">
                    <img src="/logo192.png" alt="" />
                </div>
            </div>
        </div>
    );
}
