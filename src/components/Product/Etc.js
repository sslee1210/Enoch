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
                <h2>etc</h2>
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
                        <Link to="/Product/living">Living Product</Link>
                    </li>
                    <li>
                        <Link to="/Product/Electronics">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/Product/Etc">Etc</Link>
                    </li>
                </ul>
            </div>
            <div className={ProductStyles.sec}>
                <a href="https://swit2019.cafe24.com/" target="_blank" rel="noreferrer">
                    <div className={ProductStyles.sec1}>
                        <img src={process.env.PUBLIC_URL + '/images/Etc1.jpg'} alt="Etc1" />
                        <div className={ProductStyles.tex}>
                            <h2>맑고 선명한 소리 추구</h2>
                            <p>
                                음성 증폭 출력 기능 4단계 구현. 고음의 주파수 대역 최적화 설계로 또렷하고 선명하게
                                들립니다.
                            </p>
                        </div>
                    </div>
                </a>
                <div className={ProductStyles.background}>
                    <a href="https://swit2019.cafe24.com/" target="_blank" rel="noreferrer">
                        <div className={ProductStyles.sec2}>
                            <div className={ProductStyles.tex}>
                                <h2>코드프리 멀티기능 최적화</h2>
                                <p>고감도 음성증폭기기로 사용하지만, 무선 이어폰으로도 사용할 수 있습니다.</p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/images/Etc2.jpg'} alt="Etc2" />
                        </div>
                    </a>
                </div>
                <a href="https://swit2019.cafe24.com/" target="_blank" rel="noreferrer">
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
                </a>
                <div className={ProductStyles.background}>
                    <a href="https://swit2019.cafe24.com/" target="_blank" rel="noreferrer">
                        <div className={ProductStyles.sec4}>
                            <div className={ProductStyles.tex}>
                                <h2>고감도 ANC MIC 임베디드 안테나 탑재</h2>
                                <p>
                                    하이퀄리티(High Quality) 퍼포먼스 구현으로 끊김 없는 무선 환경에서 선명한 소리를
                                    들을 수 있습니다.
                                </p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/images/Etc4.jpg'} alt="Etc4" />
                        </div>
                    </a>
                </div>
            </div>

            <img
                src={process.env.PUBLIC_URL + '/images/Up.png'}
                onClick={MoveToTop}
                className={ProductStyles.up}
                style={{ opacity: opacity }} // 이 부분에서 스타일을 직접 적용하여 opacity를 조절합니다.
                alt="Move to Top"
            />
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 50px',
                    boxSizing: 'border-box',
                }}
            >
                <div
                    style={{
                        flex: '1 1',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <p style={{ fontSize: '0.7rem', lineHeight: 1.3, fontWeight: 500 }}>
                        상호명 : 이노치코리아 대표 : 정경영
                    </p>
                    <p style={{ fontSize: '0.7rem', lineHeight: 1.3, fontWeight: 500 }}>
                        전화 : 02-2268-8770 팩스 : 0504-163-8775
                    </p>
                    <p style={{ fontSize: '0.7rem', lineHeight: 1.3, fontWeight: 500 }}>
                        주소 : 서울특별시 금천구 가산디지털 2로 165, 백상스타타워 2차 14층 1406호
                    </p>
                    <p style={{ fontSize: '0.7rem', lineHeight: 1.3, fontWeight: 500 }}>
                        문의가능시간 : 09:00 ~ 18:00 / 점심시간 : 11:30 ~ 12:30
                    </p>
                </div>
                <div
                    style={{
                        flex: '1 1',

                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}
                >
                    <p style={{ fontSize: '0.7rem', lineHeight: 1.3, fontWeight: 500 }}>
                        사업자등록번호 : 716-88-01776 [사업자정보확인]
                    </p>
                    <p style={{ fontSize: '0.7rem', lineHeight: 1.3, fontWeight: 500 }}>
                        통신판매업신고 : 제 2024-서울금천-0999호
                    </p>
                    <p style={{ fontSize: '0.7rem', lineHeight: 1.3, fontWeight: 500 }}>
                        개인정보보호책임자 : 정경영 (michelky@naver.com)
                    </p>
                    <p
                        style={{
                            fontSize: '0.7rem',
                            lineHeight: 1.3,
                            fontWeight: 500,
                        }}
                    >
                        &copy; 2024 Your Company Name. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Etc;
