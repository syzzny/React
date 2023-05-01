import React from 'react'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faHouse, faUser, faBomb, faPoo, faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from './style.css'

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='wrap'>
            <Slider {...settings}>
                <div className='img_wrap'>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/pic01.jpg`} alt="" />
                </div>
                <div className='img_wrap'>
                <img src={`${process.env.PUBLIC_URL}/assets/img/pic02.jpg`} alt="" />
                </div>
                <div className='img_wrap'>
                <img src={`${process.env.PUBLIC_URL}/assets/img/pic03.jpg`} alt="" />
                </div>
            </Slider>

            <div className='icon'>
                <ul className='icon_list'>
                    <li><FontAwesomeIcon icon={faHouse} size='2x'/></li>
                    <li><FontAwesomeIcon icon={faUser} size='2x'/></li>
                    <li><FontAwesomeIcon icon={faBomb} size='2x'/></li>
                    <li><FontAwesomeIcon icon={faPoo} size='2x'/></li>
                    <li><FontAwesomeIcon icon={faCloud} size='2x'/></li>
                </ul>
            </div>
        </div>
    )
}
