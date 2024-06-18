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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 초기 실행 시 한 번 체크

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                    speed={1000} // 슬라이드 전환 속도를 1000ms로 설정
                    allowTouchMove={false}
                    loop={true} // 슬라이드가 순환하도록 설정
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
                    <Link to="/product/robot">
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-로봇.png' : '/images/로봇.png')}
                            alt="로봇"
                        />
                        <p>
                            Robot
                            <span>로봇</span>
                        </p>
                    </Link>

                    <Link to="/product/PC">
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-컴퓨터.png' : '/images/컴퓨터.png')}
                            alt="컴퓨터"
                        />
                        <p>
                            PC
                            <span>컴퓨터</span>
                        </p>
                    </Link>

                    <Link to="/product/Etc">
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-기타.png' : '/images/기타.png')}
                            alt="기타"
                        />
                        <p>A/V Products</p>
                    </Link>

                    <Link to="/product/Electronics">
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-가전.png' : '/images/가전.png')}
                            alt="생활가전"
                        />
                        <p>
                            Electronics
                            <span>생활가전</span>
                        </p>
                    </Link>

                    <Link to="/product/Living">
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-리빙.png' : '/images/생활.png')}
                            alt="리빙"
                        />
                        <p>
                            Living
                            <span>생활용품</span>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Main;
