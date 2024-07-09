import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';
import { useTranslation } from 'react-i18next';

const Etc = () => {
    const { t } = useTranslation();
    const [opacity, setOpacity] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition > 84 && scrollPosition < documentHeight - windowHeight - 84) {
            setOpacity(1);
        } else if (scrollPosition <= 84) {
            setOpacity(scrollPosition / 84);
        } else {
            setOpacity((documentHeight - windowHeight - scrollPosition) / 84);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        const imageUrls = [
            '/images/Etc.png',
            '/images/Etc1.png',
            '/images/Etc2.jpg',
            '/images/Etc3.jpg',
            '/images/Etc4.png',
            '/images/Up.png',
        ];

        const loadImage = (url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = process.env.PUBLIC_URL + url;
                img.onload = resolve;
                img.onerror = reject;
            });
        };

        Promise.all(imageUrls.map(loadImage))
            .then(() => setImagesLoaded(true))
            .catch((error) => console.error('Failed to load images', error));
    }, []);

    const MoveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!imagesLoaded) {
        return <div>Loading...</div>; // 로딩 인디케이터
    }

    return (
        <div className={ProductStyles.product}>
            <div className={ProductStyles.big}>
                <img src={process.env.PUBLIC_URL + '/images/Etc.png'} alt="Etc" loading="lazy" />
                <h2>A / V Products</h2>
                <p>{t('각종 장비와 제품들')}</p>
            </div>
            <div className={ProductStyles.menu}>
                <ul>
                    <li>
                        <Link to="/Product/robot">Robot</Link>
                    </li>
                    <li>
                        <Link to="/Product/pc">PC</Link>
                    </li>
                    <li>
                        <Link to="/Product/Etc">A/V Products</Link>
                    </li>
                    <li>
                        <Link to="/Product/Electronics">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/Product/living">Living Product</Link>
                    </li>
                </ul>
            </div>
            <div className={ProductStyles.sec}>
                <ul>
                    <li>
                        <Link to="/Product/Eno100">
                            <div className={ProductStyles.image}>
                                <img src={process.env.PUBLIC_URL + '/images/Etc1.png'} alt="Etc1" loading="lazy" />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>ENO-100</h2>
                                <p>{t('고감도 AID 무선 TWS 음성증폭 이어폰')}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Product/Ts22">
                            <div className={ProductStyles.image}>
                                <img src={process.env.PUBLIC_URL + '/images/Etc2.jpg'} alt="Etc2" loading="lazy" />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>TS-22</h2>
                                <p>{t('고감도 완전 무선 스테레오 음성 증폭 이어폰')}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Product/TS22delux">
                            <div className={ProductStyles.image}>
                                <img src={process.env.PUBLIC_URL + '/images/Etc3.jpg'} alt="Etc3" loading="lazy" />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>TS-22 DELUX</h2>
                                <p>{t('이어폰 타입으로 양쪽 귀에 선명하고 또렷한 소리! 고감도 음성증폭기')}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Product/Eno777">
                            <div className={ProductStyles.image}>
                                <img src={process.env.PUBLIC_URL + '/images/Etc4.png'} alt="Etc4" loading="lazy" />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>ENO-777</h2>
                                <p>{t('이어폰과 스피커를 하나로! 세계 최초의 주크박스형 블루투스 무선 이어폰')}</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <img
                src={process.env.PUBLIC_URL + '/images/Up.png'}
                onClick={MoveToTop}
                className={ProductStyles.up}
                style={{ opacity: opacity }}
                alt="Move to Top"
                loading="lazy"
            />
        </div>
    );
};

export default Etc;
