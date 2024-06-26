import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import MainStyles from './Main.module.css';
import i18n from '../../lacale/i18n';
import { useTranslation } from 'react-i18next';

const Main = () => {
    const { t } = useTranslation();
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
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={1500} // 슬라이드 전환 속도를 1000ms로 설정
                    allowTouchMove={false}
                    loop={true} // 슬라이드가 순환하도록 설정
                >
                    <SwiperSlide>
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-배너1.png' : '/images/배너1.png')}
                            alt="Image 1"
                        />
                        <div className={MainStyles.bannerText}>
                            <h2>{t('이노치코리아')}</h2>
                            <h3>For the shift up to further</h3>
                            <p>{t('당신의 삶을 더욱 풍요롭게 하는 이노치코리아의 혁신적인 제품을 경험해보세요')}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-배너2.png' : '/images/배너2.png')}
                            alt="Image 2"
                        />
                        <div className={MainStyles.bannerText}>
                            <h2>{t('이노치코리아')}</h2>
                            <h3>Stepping Up to a Superior Lifestyle</h3>
                            <p>{t('이노치코리아는 삶의 질 향상과 즐거움을 제공하는 제품을 개발하고 있습니다')}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-배너3.png' : '/images/배너3.png')}
                            alt="Image 3"
                        />
                        <div className={MainStyles.bannerText}>
                            <h2>{t('이노치코리아')}</h2>
                            <h3>Advancing Your Everyday Experience</h3>
                            <p>{t('이노치코리아와 함께라면 삶의 질 향상과 일상의 즐거움이 바로 눈앞에 펼쳐집니다')}</p>
                        </div>
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
                            src={process.env.PUBLIC_URL + (isMobile ? '/images/m-생활.png' : '/images/생활.png')}
                            alt="리빙"
                        />
                        <p>
                            Living Products
                            <span>생활용품</span>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Main;
