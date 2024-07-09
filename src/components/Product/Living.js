import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';
import { useTranslation } from 'react-i18next';

const Living = () => {
    const { t } = useTranslation();
    const [opacity, setOpacity] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition > 84 && scrollPosition + windowHeight < documentHeight) {
            setOpacity(1);
        } else if (scrollPosition + windowHeight >= documentHeight) {
            setOpacity(0);
        } else {
            setOpacity(scrollPosition / 84);
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
            '/images/Living.png',
            '/images/living1.png',
            '/images/living2.png',
            '/images/living3.jpg',
            '/images/living4.png',
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
                <img src={process.env.PUBLIC_URL + '/images/Living.png'} alt="closet" loading="lazy" />
                <h2>Living Product</h2>
                <p>{t('이노치 코리아만의 감성 생활 제품')}</p>
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
                        <Link to="/Product/Folderble">
                            <div className={ProductStyles.image}>
                                <img
                                    src={process.env.PUBLIC_URL + '/images/living1.png'}
                                    alt="living1"
                                    loading="lazy"
                                />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>Folder Stroge Box</h2>
                                <p>{t('이동이 편리하고 공간 활용이 우수한 옷장')}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Product/DoubleFolder">
                            <div className={ProductStyles.image}>
                                <img
                                    src={process.env.PUBLIC_URL + '/images/living2.png'}
                                    alt="living2"
                                    loading="lazy"
                                />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>{t('2단, 4단 수납장')}</h2>
                                <p>{t('세련된 디자인과 실용성을 갖춘 수납장')}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Product/Healing">
                            <div className={ProductStyles.image}>
                                <img
                                    src={process.env.PUBLIC_URL + '/images/living3.jpg'}
                                    alt="living3"
                                    loading="lazy"
                                />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>Heeling Wave</h2>
                                <p>{t('집에서도 효과적인 운동이 가능한 진동운동기구')}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Product/Shampoo">
                            <div className={ProductStyles.image}>
                                <img
                                    src={process.env.PUBLIC_URL + '/images/living4.png'}
                                    alt="living4"
                                    loading="lazy"
                                />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>{t('미라클 샴푸기')}</h2>
                                <p>{t('장소에 구애받지 않고 머리를 감을 수 있는 샴푸기')}</p>
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

export default Living;
