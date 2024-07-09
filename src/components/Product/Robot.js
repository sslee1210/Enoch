import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';
import i18n from '../../lacale/i18n';
import { useTranslation } from 'react-i18next';

const Robot = () => {
    const { t } = useTranslation();
    const [opacity, setOpacity] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            if (scrollPosition + windowHeight >= fullHeight) {
                setOpacity(0);
            } else if (scrollPosition > 84) {
                setOpacity(1);
            } else {
                setOpacity(scrollPosition / 84);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const imageUrls = [
            '/images/Robot.png',
            '/images/Robot1.png',
            '/images/Robot2.jpg',
            '/images/Robot3.png',
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
                <img src={process.env.PUBLIC_URL + '/images/Robot.png'} alt="Robot" loading="lazy" />
                <h2>Robot</h2>
                <p>{t('첨단 기술로 일상에 혁신을 더하는 스마트 로봇')}</p>
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
                        <Link to="/Product/etc">A/V Products</Link>
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
                        <Link to="/support">
                            <div className={ProductStyles.image}>
                                <img src={process.env.PUBLIC_URL + '/images/Robot1.png'} alt="Robot1" loading="lazy" />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>{t('조리용 로봇팔')}</h2>
                                <p>{t('조리 과정을 자동화하여 효율성과 정확성을 높이는 혁신적인 조리용 로봇팔')}</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1TQ2aGZWFb4Vz269ca3Fe3YHYa-XM99vE/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={ProductStyles.image}>
                                <img src={process.env.PUBLIC_URL + '/images/Robot3.png'} alt="Robot3" loading="lazy" />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>{t('4족 로봇')}</h2>
                                <p>
                                    {t(
                                        '점검, 조사, 보안, 측량을 포함한 여러 분야의 핵심 산업 요구를 충족하는 4족 로봇'
                                    )}
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <Link to="/Product/RobotYOYO">
                            <div className={ProductStyles.image}>
                                <img src={process.env.PUBLIC_URL + '/images/Robot2.jpg'} alt="Robot2" loading="lazy" />
                            </div>
                            <div className={ProductStyles.text}>
                                <h2>{t('요요 A.I Robot')}</h2>
                                <p>
                                    {t('자연스러운 커뮤니케이션으로 아이와 대화하고 춤을 추는 인공지능 교감형 로봇!')}
                                </p>
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

export default Robot;
