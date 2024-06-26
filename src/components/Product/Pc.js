import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';
import i18n from '../../lacale/i18n';
import { useTranslation } from 'react-i18next';

const Pc = () => {
    const { t } = useTranslation();
    const [opacity, setOpacity] = useState(0);

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

    const MoveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={ProductStyles.product}>
            <div className={ProductStyles.big}>
                <img src={process.env.PUBLIC_URL + '/images/PC.png'} alt="Pc" />
                <h2>PC</h2>
                <p>{t('최신 기술과 혁신적인 디자인이 결합된 고성능 PC')}</p>
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
                                <img src={process.env.PUBLIC_URL + '/images/Pc1.png'} alt="Pc1" />
                            </div>

                            <div className={ProductStyles.text}>
                                <h2>All in One 27inch PC</h2>
                                <p>{t('27인치 올인원 베어본 시스템, 강력한 성능과 세련된 디자인을 자랑합니다.')}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <img
                src={process.env.PUBLIC_URL + '/images/Up.png'}
                onClick={MoveToTop}
                className={ProductStyles.up}
                style={{ opacity: opacity }} // 이 부분에서 스타일을 직접 적용하여 opacity를 조절합니다.
                alt="Move to Top"
            />
        </div>
    );
};

export default Pc;
