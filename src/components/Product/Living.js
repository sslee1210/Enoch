import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';

const Living = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
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
                <img src={process.env.PUBLIC_URL + '/images/Living.png'} alt="closet" />
                <h2>Living Product</h2>
                <p>이노치 코리아만의 감성 생활 제품</p>
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
                    <img src={process.env.PUBLIC_URL + '/images/living1.png'} alt="living1" />
                    <div className={ProductStyles.tex}>
                        <h2>Folder Stroge Box</h2>
                        <p>이동이 편리하고 공간 활용이 우수한 옷장</p>
                    </div>
                </div>

                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec2}>
                        <div className={ProductStyles.tex}>
                            <h2>2단, 4단 수납장</h2>
                            <p>세련된 디자인과 실용성을 갖춘 수납장</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/living2.png'} alt="living2" />
                    </div>
                </div>

                <div className={ProductStyles.sec3}>
                    <img src={process.env.PUBLIC_URL + '/images/living3.jpg'} alt="living3" />
                    <div className={ProductStyles.tex}>
                        <h2>Heeling Wave</h2>
                        <p>짧은 시간 내에 효과적인 운동이 가능한 진동운동기구</p>
                    </div>
                </div>

                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec4}>
                        <div className={ProductStyles.tex}>
                            <h2>미라클 샴푸기</h2>
                            <p>장소에 구애받지 않고 머리를 감을 수 있는 샴푸기</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/living4.png'} alt="living4" />
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

export default Living;
