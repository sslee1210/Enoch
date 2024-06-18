import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import MainStyles from './Main.module.css';

const Main = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsMenuOpen(false); // 화면 크기가 변경될 때마다 메뉴를 닫음
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 초기 실행 시 한 번 체크

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = () => {
        if (isMobile) {
            setIsMenuOpen(false); // 메뉴 클릭 시 메뉴를 닫음
        }
    };

    return (
        <div className={MainStyles.main}>
            <div className={MainStyles.SwiperSlide}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false}
                >
                    <SwiperSlide>
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-배너1.png' : '/images/배너1.png')}
                            alt="Image 1"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-배너2.png' : '/images/배너2.png')}
                            alt="Image 2"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-배너3.png' : '/images/배너3.png')}
                            alt="Image 3"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={MainStyles.product}>
                <h1>Product</h1>
                <div className={MainStyles.product_container}>
                    <Link to="/product/robot" onClick={handleMenuClick}>
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-로봇.png' : '/images/로봇.png')}
                            alt="로봇"
                        />
                    </Link>

                    <Link to="/product/PC" onClick={handleMenuClick}>
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-컴퓨터.png' : '/images/컴퓨터.png')}
                            alt="컴퓨터"
                        />
                    </Link>

                    <Link to="/product/Living" onClick={handleMenuClick}>
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-리빙.png' : '/images/생활.png')}
                            alt="리빙"
                        />
                    </Link>

                    <Link to="/product/Electronics" onClick={handleMenuClick}>
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-가전.png' : '/images/가전.png')}
                            alt="생활가전"
                        />
                    </Link>

                    <Link to="/product/Etc" onClick={handleMenuClick}>
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-기타.png' : '/images/기타.png')}
                            alt="기타"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Main;
