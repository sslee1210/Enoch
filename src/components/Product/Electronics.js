import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';
import { useTranslation } from 'react-i18next';

const Electronics = () => {
    const { t } = useTranslation();
    const [opacity, setOpacity] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition > 84 && scrollPosition + windowHeight < documentHeight - 84) {
            setOpacity(1);
        } else if (scrollPosition + windowHeight >= documentHeight - 84) {
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
            '/images/Electronic.png',
            '/images/electronic3.png',
            '/images/electronic4.png',
            '/images/electronic5.png',
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
                <img src={process.env.PUBLIC_URL + '/images/Electronic.png'} alt="Electronics" loading="lazy" />
                <h2>Electronics</h2>
                <p>{t('이노치 코리아에서 추천하는 생활 가전')}</p>
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
                        <a>
                            <div className={ProductStyles.image}>
                                <img
                                    src={process.env.PUBLIC_URL + '/images/electronic3.png'}
                                    alt="electronic1"
                                    loading="lazy"
                                />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>{t('식기 세척기')}</h2>
                                <p>
                                    {t(
                                        '특허받은 45도 컵 스프레이와 360도 회전 스프레이 세척 및 복합 린스 방식으로 살균율 99.99%! 설거지, 건조, 저장까지 모두 가능한 모던한 외형의 식기세척기'
                                    )}
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div className={ProductStyles.image}>
                                <img
                                    src={process.env.PUBLIC_URL + '/images/electronic4.png'}
                                    alt="electronic2"
                                    loading="lazy"
                                />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>{t('제습기')}</h2>
                                <p>{t('1.5L의 대용량 물탱크를 보유하고 강력한 제습 효과를 자랑하는 제습기')}</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <Link to="/Product/Petdry">
                            <div className={ProductStyles.image}>
                                <img
                                    src={process.env.PUBLIC_URL + '/images/electronic5.png'}
                                    alt="electronic3"
                                    loading="lazy"
                                />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>{t('펫 드라이기')}</h2>
                                <p>{t('건강하고 스마트하게!! 우리 가족을 위한 스마트한 선택')}</p>
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

export default Electronics;
