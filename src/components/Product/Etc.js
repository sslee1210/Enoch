import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';

const Etc = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
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
                <img src={process.env.PUBLIC_URL + '/images/Etc.png'} alt="Etc" />
                <h2>A / V Products</h2>
                <p>각종 장비와 제품들</p>
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
                                <img src={process.env.PUBLIC_URL + '/images/Etc1.png'} alt="Etc1" />
                            </div>

                            <div className={ProductStyles.text}>
                                <h2>ENO-100</h2>
                                <p>고감도 AID 무선 TWS 음성증폭 이어폰</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <a>
                            <div className={ProductStyles.image}>
                                <img src={process.env.PUBLIC_URL + '/images/Etc2.jpg'} alt="Etc2" />
                            </div>

                            <div className={ProductStyles.text}>
                                <h2>TS-22</h2>
                                <p>고감도 완전 무선 스테레오 음성 증폭 이어폰</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <Link to="/Product/TS22delux">
                            <div className={ProductStyles.image}>
                                <img src={process.env.PUBLIC_URL + '/images/Etc3.jpg'} alt="Etc3" />
                            </div>

                            <div className={ProductStyles.text}>
                                <h2>TS-22 DELUX</h2>
                                <p>이어폰 타입으로 양쪽 귀에 선명하고 또렷한 소리! 고감도 음성 증폭기</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Product/Eno777">
                            <div className={ProductStyles.image}>
                                <img src={process.env.PUBLIC_URL + '/images/Etc4.png'} alt="Etc4" />
                            </div>

                            <div className={ProductStyles.text}>
                                <h2>ENO-777</h2>
                                <p>이어폰과 스피커를 하나로! 세계 최초의 주크박스형 블루투스 무선 이어폰</p>
                            </div>
                        </Link>
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

export default Etc;
