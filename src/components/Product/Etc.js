import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';
import FooterStyles from '../Subpage/Footer.module.css';

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
                <div className={ProductStyles.sec1}>
                    <img src={process.env.PUBLIC_URL + '/images/Etc1.jpg'} alt="Etc1" />
                    <div className={ProductStyles.tex}>
                        <h2>Eno-100</h2>
                        <p>고감도 AID 무선 TWS 음성증폭 이어폰</p>
                    </div>
                </div>

                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec2}>
                        <div className={ProductStyles.tex}>
                            <h2>코드프리 멀티기능 최적화</h2>
                            <p>
                                고감도 음성증폭기기로 사용하지만,
                                <br />
                                무선 이어폰으로도 사용할 수 있습니다.
                            </p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/Etc2.jpg'} alt="Etc2" />
                    </div>
                </div>

                <div className={ProductStyles.sec3}>
                    <img src={process.env.PUBLIC_URL + '/images/Etc3.png'} alt="Etc3" />
                    <div className={ProductStyles.tex}>
                        <h2>빠르고 안정적인 Bluetooth 5.2 버전 탑재</h2>
                        <p>
                            무선기기와 빠른 연결 속도, 끊기지 않는 통화 품질, 안정적인 사운드의 무선 환경을
                            구현했습니다.
                        </p>
                    </div>
                </div>

                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec4}>
                        <div className={ProductStyles.tex}>
                            <h2>Eno-777</h2>
                            <p>
                                이어폰과 스피커를 하나로!
                                <br />
                                세계 최초의 주크박스형 블루투스 무선 이어폰
                            </p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/Etc4.png'} alt="Etc4" />
                    </div>
                </div>
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
