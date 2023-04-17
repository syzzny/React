import React from 'react'

import './Index.css'

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

                <div className='main-place'>
                    <div className='main-place-wrap'>
                        <div className='main-place_slogan'>
                            <h2>Where creativity meets strategy.</h2>
                        </div>
                    </div>
                </div>
            </main>


            <footer id='footer'>

            </footer>
        </div>
    )
}
