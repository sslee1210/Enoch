import React, { useState, useEffect, useMemo, useCallback, lazy, Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import MainStyles from './Main.module.css';
import { useTranslation } from 'react-i18next';

const ProductLink = lazy(() => import('./ProductLink'));

const Main = () => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const swiperConfig = useMemo(
        () => ({
            modules: [Pagination, Autoplay],
            spaceBetween: 50,
            slidesPerView: 1,
            navigation: true,
            pagination: { clickable: true },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 1500,
            allowTouchMove: false,
            loop: true,
        }),
        []
    );

    const bannerSlides = useMemo(
        () => [
            {
                imageSrc: isMobile ? '/images/m-배너1.webp' : '/images/배너1.webp',
                alt: 'Image 1',
                title: t('이노치코리아'),
                subtitle: 'For the shift up to further',
                description: t('당신의 삶을 더욱 풍요롭게 하는 이노치코리아의 혁신적인 제품을 경험해보세요'),
            },
            {
                imageSrc: isMobile ? '/images/m-배너2.webp' : '/images/배너2.webp',
                alt: 'Image 2',
                title: t('이노치코리아'),
                subtitle: 'Stepping Up to a Superior Lifestyle',
                description: t('이노치코리아는 삶의 질 향상과 즐거움을 제공하는 제품을 개발하고 있습니다'),
            },
            {
                imageSrc: isMobile ? '/images/m-배너3.webp' : '/images/배너3.webp',
                alt: 'Image 3',
                title: t('이노치코리아'),
                subtitle: 'Advancing Your Everyday Experience',
                description: t('이노치코리아와 함께라면 삶의 질 향상과 일상의 즐거움이 바로 눈앞에 펼쳐집니다'),
            },
        ],
        [isMobile, t]
    );

    const productLinks = useMemo(
        () => [
            {
                to: '/product/robot',
                imageSrc: isMobile ? '/images/m-로봇.webp' : '/images/로봇.webp',
                alt: '로봇',
                title: 'Robot',
                subtitle: '로봇',
            },
            {
                to: '/product/PC',
                imageSrc: isMobile ? '/images/m-컴퓨터.webp' : '/images/컴퓨터.webp',
                alt: '컴퓨터',
                title: 'PC',
                subtitle: '컴퓨터',
            },
            {
                to: '/product/Etc',
                imageSrc: isMobile ? '/images/m-기타.webp' : '/images/기타.webp',
                alt: '기타',
                title: 'A/V Products',
                subtitle: '',
            },
            {
                to: '/product/Electronics',
                imageSrc: isMobile ? '/images/m-가전.webp' : '/images/가전.webp',
                alt: '생활가전',
                title: 'Electronics',
                subtitle: '생활가전',
            },
            {
                to: '/product/Living',
                imageSrc: isMobile ? '/images/m-생활.webp' : '/images/생활.webp',
                alt: '리빙',
                title: 'Living Products',
                subtitle: '생활용품',
            },
        ],
        [isMobile]
    );

    return (
        <div className={MainStyles.main}>
            <div className={MainStyles.SwiperSlide}>
                <Swiper {...swiperConfig}>
                    {bannerSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={process.env.PUBLIC_URL + slide.imageSrc} alt={slide.alt} loading="lazy" />
                            <div className={MainStyles.bannerText}>
                                <h2>{slide.title}</h2>
                                <h3>{slide.subtitle}</h3>
                                <p>{slide.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={MainStyles.product}>
                <h1>Product</h1>
                <div className={MainStyles.product_container}>
                    <Suspense fallback={<div>Loading...</div>}>
                        {productLinks.map((link, index) => (
                            <ProductLink key={index} {...link} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Main);
