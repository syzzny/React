import React, { useState, useEffect} from 'react'

import './Index.css'
import ScrollAnimate from 'react-scroll-fade-animation';


export default function Index() {

    return (
        <div className='wrap'>

            <header className='header'>
                <div className='header_inner'>
                    <h1 id='logo'>
                        <img src="/assets/img/logo2.png" alt="" />
                    </h1>
                    <nav className='menu-container'>
                        <ul id='menu'>
                            <li><a href=""><span>전시</span></a></li>
                            <li><a href=""><span>프로그램</span></a></li>
                            <li><a href=""><span>공간</span></a></li>
                            <li><a href=""><span>예약</span></a></li>
                        </ul>
                    </nav>
                    <div className='sub-menu'>
                        <ul>
                            <li><a href=""><span>관심전시</span></a></li>
                            <li><a href=""><span style={{ fontWeight: "bolder" }}>KOR</span></a></li>
                        </ul>
                    </div>
                </div>
            </header>




            <main id='main' className='main-container'>
                <div className='main-wrap'>
                    <div className='main_slogan'>
                        <h2>Discover the beauty of human creativity at our art museum.</h2>
                    </div>
                    <div className='main_img'>
                        <img src="/assets/img/mainimg.jpg" alt="" />
                    </div>
                </div>


                <ScrollAnimate path={'top'} duration={1200}>
                    <div className='main-artwork'>
                        <div className='main-artwrok-wrap'>
                            <div className='main-artwork_slogan'>
                                <h2>We present the best work.</h2>
                            </div>
                            <div className='main-artwork-more'>
                                <a href="">
                                    <span>more about art</span>
                                    <img src="/assets/img/moreicon.png" alt="" />
                                </a>
                            </div>
                            <div className='main-artwork-art'>
                                <ul className='artwork-list'>
                                    <li className='swiper-slide'><a href=""><img src="/assets/img/artwork01.jpg" alt="" /></a></li>
                                    <li className='swiper-slide'><a href=""><img src="/assets/img/artwork02.jpg" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollAnimate>
                <ScrollAnimate path={'top'} duration={1500}>
                    <div className='main-program'>
                        <div className='main-program-wrap'>
                            <div className='main-program_slogan'>
                                <h2>PROGRAM</h2>
                            </div>
                            <div className='border'></div>
                            <div className='main-program-infor'>
                                <div className='main-program-sub'>
                                    <span className='place'>Exhibition Hall</span>
                                    <span className='price'>FREE</span>
                                    <span className='time'>Tue,Fri 10:00am - 11:00am</span>
                                </div>
                                <div className='main-program-title'>
                                    <span>[MAURIZIO CATTELAN] <br />예술적 경험을 확장하는 대학생 교육</span>
                                </div>
                                <div className='main-program-button'>
                                    <img src="/assets/img/programicon.png" alt="" />
                                </div>
                            </div>
                            <div className='main-program-img'>
                                <img src="/assets/img/program02.jpg" alt="" />
                            </div>
                            <div className='border'></div>
                        </div>
                    </div>
                </ScrollAnimate>

                <ScrollAnimate path={'top'} duration={1500}>
                    <div className='main-place'>
                        <div className='main-place-wrap'>
                            <div className='main-place_slogan'>
                                <h2>Where creativity meets strategy.</h2>
                            </div>
                            <ul className='main-place-contents'>
                                <li className='contents'>
                                    <div className='main-contents-img'>
                                        <img src="/assets/img/museum01.jpg" alt="" />
                                    </div>
                                    <div className='main-contents-title'>
                                        <p className='museum'>국립현대미술관</p>
                                        <p className='address'>서울 종로구 삼청로30 소격동 165-10</p>
                                    </div>
                                </li>
                                <li className='contents'>
                                    <div className='main-contents-img'>
                                        <img src="/assets/img/museum02.jpg" alt="" />
                                    </div>
                                    <div className='main-contents-title'>
                                        <p className='museum'>서울시립미술관</p>
                                        <p className='address'>서울 중구 덕수궁길61 서소문동 37</p>
                                    </div>
                                </li>
                                <li className='contents'>
                                    <div className='main-contents-img'>
                                        <img src="/assets/img/museum03.jpg" alt="" />
                                    </div>
                                    <div className='main-contents-title'>
                                        <p className='museum'>리움 미술관</p>
                                        <p className='address'>서울 용산구 이태원로 55길 60-16</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ScrollAnimate>
            </main>


            <footer id='footer'>
                <div className='footer-wrap'>
                    <div className='footer-top'>
                        <nav className='footer_menu-container'>
                            <ul id='footer-menu'>
                                <li><a href=""><span>이메일 무단수집 거부</span></a></li>
                                <li><span>|</span></li>
                                <li><a href=""><span>개인정보처리방침</span></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='footer-bottom'>
                        <div className='footer-logo'>
                            <img src="/assets/img/logo2.png" alt="" />
                        </div>
                        <div className='footer-address'>
                            <p>(우 49300) 부산광역시 사하구 낙동남로 1191 (하단동) 부산현대미술관</p>
                            <p>Busan Modern Art Museum Nakdongnam -ro, Saha -gu, Busan (Hadan -dong)</p>
                        </div>
                        <div className='copyright'>
                            <span>ⓒ 2017 by Museum of Contemporary Art Busan all right reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
