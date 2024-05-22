import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import MainStyles from './Main.module.css';

const Main = () => {
    return (
        <div className={MainStyles.main}>
            <div className={MainStyles.SwiperSlide}>
                <Swiper
                    modules={[Pagination, Autoplay]} // allowTouchMove 모듈 제거
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false} // 마우스로 슬라이드 이동을 비활성화
                >
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/images/배너1.png'} alt="Image 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/images/배너2.png'} alt="Image 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/images/배너3.png'} alt="Image 3" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={MainStyles.product}>
                <h1>Product</h1>
                <div className={MainStyles.product_container}>
                    <Link to="/robot">
                        <img src={process.env.PUBLIC_URL + '/images/사진 준비중.png'} alt="로봇" />
                    </Link>

                    <Link to="/PC">
                        <img src={process.env.PUBLIC_URL + '/images/사진 준비중.png'} alt="컴퓨터" />
                    </Link>

                    <Link to="/Living">
                        <img src={process.env.PUBLIC_URL + '/images/사진 준비중.png'} alt="리빙" />
                    </Link>

                    <Link to="/appliance">
                        <img src={process.env.PUBLIC_URL + '/images/사진 준비중.png'} alt="생활가전" />
                    </Link>

                    <Link to="/Etc">
                        <img src={process.env.PUBLIC_URL + '/images/사진 준비중.png'} alt="기타" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Main;
