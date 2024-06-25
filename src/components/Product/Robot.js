import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';

const Robot = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            if (scrollPosition + windowHeight >= fullHeight) {
                setOpacity(0); // Hide the arrow when at the bottom
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
                <img src={process.env.PUBLIC_URL + '/images/Robot.png'} alt="Robot" />
                <h2>Robot</h2>
                <p>첨단 기술로 일상에 혁신을 더하는 스마트 로봇</p>
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
                                <img src={process.env.PUBLIC_URL + '/images/Robot1.png'} alt="Robot1" />
                            </div>

                            <div className={ProductStyles.text}>
                                <h2>조리용 로봇팔</h2>
                                <p>조리 과정을 자동화하여 효율성과 정확성을 높이는 혁신적인 조리용 로봇팔</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <a>
                            <div className={ProductStyles.image}>
                                <img src={process.env.PUBLIC_URL + '/images/Robot3.png'} alt="Robot3" />
                            </div>

                            <div className={ProductStyles.text}>
                                <h2>4족 로봇</h2>
                                <p>점검, 조사, 보안, 측량을 포함한 여러 분야의 핵심 산업 요구를 충족하는 4족 로봇</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div className={ProductStyles.image}>
                                <img src={process.env.PUBLIC_URL + '/images/Robot2.jpg'} alt="Robot2" />
                            </div>

                            <div className={ProductStyles.text}>
                                <h2>요요 A.I Robot</h2>
                                <p>자연스러운 커뮤니케이션으로 아이와 대화하고 춤을 추는 인공지능 교감형 로봇!</p>
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

export default Robot;
