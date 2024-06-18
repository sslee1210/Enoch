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
                <div className={ProductStyles.sec1}>
                    <img src={process.env.PUBLIC_URL + '/images/Robot1.png'} alt="Robot1" />
                    <div className={ProductStyles.tex}>
                        <h2>조리용 로봇팔</h2>
                        <p>조리 과정을 자동화하여 효율성과 정확성을 높이는 혁신적인 조리용 로봇팔</p>
                    </div>
                    <div className={ProductStyles.rbtex}>
                        <Link to="/Support" className={ProductStyles.rb}>
                            브로슈어 보기
                        </Link>
                        <Link to="/support/guide" className={ProductStyles.rb}>
                            설명법 보기
                        </Link>
                    </div>
                </div>

                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec2}>
                        <div className={ProductStyles.tex}>
                            <h2>요요 A.I Robot</h2>
                            <p>자연스러운 커뮤니케이션으로 아이와 대화하고 춤을 추는 인공지능 교감형 로봇!</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/Robot2.jpg'} alt="Robot2" />
                    </div>
                </div>

                <div className={ProductStyles.sec3}>
                    <img src={process.env.PUBLIC_URL + '/images/Robot3.png'} alt="Robot3" />
                    <div className={ProductStyles.tex}>
                        <h2>4족 로봇</h2>
                        <p>점검, 조사, 보안, 측량을 포함한 여러 분야의 핵심 산업 요구를 충족하는 4족 로봇</p>
                    </div>
                </div>

                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec4}>
                        <img
                            src={process.env.PUBLIC_URL + '/images/Robot4.png'}
                            alt="Robot4"
                            style={{
                                display: 'block',
                                margin: '0 auto',
                                width: '80%',
                                height: 'auto',
                            }}
                        />
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

export default Robot;
