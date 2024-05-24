import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';

const Etc = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 84) {
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
                <img src={process.env.PUBLIC_URL + '/images/Etc.png'} alt="Etc" />
                <h2>ENO-100</h2>
                <p>고감도 완전 무선 스테레오 음성 증폭 이어폰 TWS 맑은소리</p>
            </div>
            <div className={ProductStyles.menu}>
                <ul>
                    <li>
                        <Link to="/product/robot">Robot</Link>
                    </li>
                    <li>
                        <Link to="/product/pc">Pc</Link>
                    </li>
                    <li>
                        <Link to="/product/living">Living Product</Link>
                    </li>
                    <li>
                        <Link to="/product/appliance">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/product/etc">Etc</Link>
                    </li>
                </ul>
            </div>
            <div className={ProductStyles.sec}>
                <div className={ProductStyles.sec1}>
                    <img src={process.env.PUBLIC_URL + '/images/Etc1.jpg'} alt="Etc1" />
                    <div className={ProductStyles.tex}>
                        <h2>맑고 선명한 소리 추구</h2>
                        <p>
                            음성 증폭 출력 기능 4단계 구현. 고음의 주파수 대역 최적화 설계로 또렷하고 선명하게 들립니다.
                        </p>
                    </div>
                </div>
                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec2}>
                        <div className={ProductStyles.tex}>
                            <h2>코드프리 멀티기능 최적화</h2>
                            <p>고감도 음성증폭기기로 사용하지만, 무선 이어폰으로도 사용할 수 있습니다.</p>
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
                            <h2>고감도 ANC MIC 임베디드 안테나 탑재</h2>
                            <p>
                                하이퀄리티(High Quality) 퍼포먼스 구현으로 끊김 없는 무선 환경에서 선명한 소리를 들을 수
                                있습니다.
                            </p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/Etc4.jpg'} alt="Etc4" />
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
