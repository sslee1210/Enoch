import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';
import FooterStyles from '../Subpage/Footer.module.css';

const Electronics = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
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
                <img src={process.env.PUBLIC_URL + '/images/Robot.jpg'} alt="Robot" />
                <h2>Electronics</h2>
                <p>이노치 코리아에서 추천하는 생활 가전 용품</p>
            </div>
            <div className={ProductStyles.menu}>
                <ul>
                    <li>
                        <Link to="/Product/robot">Robot</Link>
                    </li>
                    <li>
                        <Link to="/Product/pc">Pc</Link>
                    </li>
                    <li>
                        <Link to="/Product/living">Living Product</Link>
                    </li>
                    <li>
                        <Link to="/Product/Electronics">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/Product/etc">Etc</Link>
                    </li>
                </ul>
            </div>
            <div className={ProductStyles.sec}>
                <a href="https://swit2019.cafe24.com/" target="_blank" rel="noreferrer">
                    <div className={ProductStyles.sec1}>
                        <img src={process.env.PUBLIC_URL + '/images/electronic1.png'} alt="Robot1" />
                        <div className={ProductStyles.tex}>
                            <h2>Smart Hair Shampping Device</h2>
                            <p>
                                장소에 구애받지 않고, 옷을 입은 상태에서도 머리를 감을 수 있어 편리합니다. 병원, 요양원,
                                노인복지센터 등 늘어나고 있는 노령 가구원들의 케어를 함께 합니다.
                            </p>
                        </div>
                    </div>
                </a>
                <div className={ProductStyles.background}>
                    <a href="https://swit2019.cafe24.com/" target="_blank" rel="noreferrer">
                        <div className={ProductStyles.sec2}>
                            <div className={ProductStyles.tex}>
                                <h2>Healing Wave</h2>
                                <p>
                                    집에서도 간편하게 전신 운동을 할 수 있는 진동 운동기! 와이드 발판으로 내구성이
                                    튼튼하고, 무선리모콘으로 손쉽게 조작할 수 있는 홈트레이닝 기구입니다.
                                </p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/images/electronic2.png'} alt="Robot2" />
                        </div>
                    </a>
                </div>
                <a href="https://swit2019.cafe24.com/" target="_blank" rel="noreferrer">
                    <div className={ProductStyles.sec3}>
                        <img src={process.env.PUBLIC_URL + '/images/electronic3.png'} alt="Robot3" />
                        <div className={ProductStyles.tex}>
                            <h2>Dish Washer</h2>
                            <p>
                                특허받은 45&deg; 컵 스프레이와 360&deg; 회전 스프레이 세척 및 복합 린스 방식으로 살균율
                                99.99%! 설거지, 건조, 저장까지 모두 가능한 모던한 외형의 식기세척기입니다.
                            </p>
                        </div>
                    </div>
                </a>
                <div className={ProductStyles.background}>
                    <a href="https://swit2019.cafe24.com/" target="_blank" rel="noreferrer">
                        <div className={ProductStyles.sec4}>
                            <div className={ProductStyles.tex}>
                                <h2>Dehumidifier</h2>
                                <p>1.5L의 대용량 물탱크를 보유하고 강력한 제습 효과를 자랑하는 제습기입니다.</p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/images/electronic4.png'} alt="Robot4" />
                        </div>
                    </a>
                </div>
            </div>

            <img
                src={process.env.PUBLIC_URL + '/images/Up.png'}
                onClick={MoveToTop}
                className={ProductStyles.up}
                style={{ opacity: opacity }}
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

export default Electronics;
