
import React, { useState, useEffect } from 'react'

import './css/Index.css'

import { Link } from 'react-router-dom'

import ScrollAnimate from 'react-scroll-fade-animation';

export default function ArtworkAll() {

    // useState 훅으로 'prevScrollY'와 'visible' 상태값 초기화
    // prevScollY : 스크롤 전 위치, visible : 헤어 표시 여부를 나타내는 불리언 값
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [visible, setVisible] = useState(true);

    // useEffect 훅을 사용하여 스크롤 이벤트 등록
    useEffect(() => {
        /* handleScroll 함수는 현재 스크롤 위치를 계산하여 'prevScrollY' 값을 업데이트하고,
            현재 스크롤 방향에 따라 visible 값을 변경*/
        // 스크롤 방향이 아래쪽이면 visible 값을 false로 설정하여 헤더 숨기기
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (prevScrollY < currentScrollY && visible) {
                setVisible(false);
            } else if (prevScrollY > currentScrollY && !visible) {
                setVisible(true);
            }

            setPrevScrollY(currentScrollY);
        };

        // 이벤트 리스너 등록
        window.addEventListener("scroll", handleScroll);

        // 이벤트 등록 해제 함수를 반환하여 컴포너트가 언마운트 될때 이벤트 리스너 삭제
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY, visible]);

    // 'visible' 값에 따라 클래스 이름을 동적으로 할당하여 헤더의 표시여부 결정
    // true인 경우 "header" false인 경우 "header header--hidden" 클래스 이름이 할당
    const header = visible ? "header" : "header header--hidden";

    return (
        <div className='wrap'>

            <header className={header}>
                <div className='header_inner'>
                    <a href="/">
                        <div id='logo'>
                            <img src="/assets/img/logo2.png" alt="" />
                        </div>
                    </a>
                    <nav className='menu-container'>
                        <ul id='menu'>
                            <li><a href="#main-artwork"><span>전시</span></a></li>
                            <li><a href="#main-program"><span>프로그램</span></a></li>
                            <li><a href="#main-place"><span>공간</span></a></li>
                            <li><a href=""><span>예약</span></a></li>
                        </ul>
                    </nav>
                    <div className='sub-menu'>
                        <ul>
                            <li className='checkart'><a href=""><span>관심전시</span></a></li>
                            <li><a href=""><span style={{ fontWeight: "bolder" }}>KOR</span></a></li>
                        </ul>
                    </div>
                </div>
            </header>


            <main id='ArtworkAll_main' className='main-container'>

                <div className='artfilter'>
                    <div className='artfilter-wrap'>
                        <div className='filter-top'>
                            <div className='filter-name'>
                                <h3>Art Museum</h3>
                            </div>
                            <div className='filter-top-list'>
                                <ul className='filter-top-list-place'>
                                    <li><a href="">전체보기</a></li>
                                    <li><a href="">국립 현대미술관</a></li>
                                    <li><a href="">서울 시립미술관</a></li>
                                    <li><a href="">리움 미술관</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='borderline'></div>
                        <div className='filter-bottom'>
                            <div className='filter-name'>
                                <h3>Filter by</h3>
                            </div>
                            <span>전시기간</span>
                            <div className='art-date'>
                                <ul className='art-date-list'>
                                    <li><a href="">전체</a></li>
                                    <li><a href="">예정전시</a></li>
                                    <li><a href="">현재전시</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='artlist'>
                    <div className='artlist-wrap'>
                        <ul className='artlist-img'>
                            <Link to={'/artworkinfo'}>
                                <li>
                                    <a href=""><img src="/assets/img/artwork01.jpg" alt="" /></a>
                                    <div className='article-info'>
                                        <span className='title'>부산모카 시네미디어</span>
                                        <span className='date'>2021.10.08 -</span>
                                    </div>
                                </li>
                            </Link>
                            <Link to={'/artworkinfo'}>
                                <li>
                                    <a href=""><img src="/assets/img/artwork02.jpg" alt="" /></a>
                                    <div className='article-info'>
                                        <span className='title'>부산모카 시네미디어</span>
                                        <span className='date'>2021.10.08 -</span>
                                    </div>
                                </li>
                            </Link>
                            <Link to={'/artworkinfo'}>
                                <li>
                                    <a href=""><img src="/assets/img/artwork03.jpg" alt="" /></a>
                                    <div className='article-info'>
                                        <span className='title'>부산모카 시네미디어</span>
                                        <span className='date'>2021.10.08 -</span>
                                    </div>
                                </li>
                            </Link>
                            <Link to={'/artworkinfo'}>
                                <li>
                                    <a href=""><img src="/assets/img/artwork04.jpg" alt="" /></a>
                                    <div className='article-info'>
                                        <span className='title'>부산모카 시네미디어</span>
                                        <span className='date'>2021.10.08 -</span>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>


            </main>
        </div>
    )
}
