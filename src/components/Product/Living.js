import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';
import FooterStyles from '../Subpage/Footer.module.css';

const Living = () => {
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
                <img src={process.env.PUBLIC_URL + '/images/living.png'} alt="Robot" />
                <h2 className={ProductStyles.textblack}>Folderble Box</h2>
                <p className={ProductStyles.textblack}>
                    X30 quadruped robot, a flagship product designed to meet core industry needs in multiple fields
                    including inspection, investigation, security, surveying and mapping.
                </p>
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
                        <img src={process.env.PUBLIC_URL + '/images/living1.png'} alt="Robot1" />
                        <div className={ProductStyles.tex}>
                            <h2>Unstoppable operation in Extreme weather</h2>
                            <p>Operate from -20°C to 55°C; IP67 protection.</p>
                        </div>
                    </div>
                </a>
                <div className={ProductStyles.background}>
                    <a href="https://swit2019.cafe24.com/" target="_blank" rel="noreferrer">
                        <div className={ProductStyles.sec2}>
                            <div className={ProductStyles.tex}>
                                <h2>Rapidlysteadily surmount obstacles</h2>
                                <p>
                                    X30 can flexibly climb up and down stairs at a 45° angle; it can stably climb
                                    industrial stairs, respond to sudden task requirements the first time, and quickly
                                    traverse into complex scenes.
                                </p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/images/living2.png'} alt="Robot2" />
                        </div>
                    </a>
                </div>
                <a href="https://swit2019.cafe24.com/" target="_blank" rel="noreferrer">
                    <div className={ProductStyles.sec3}>
                        <img src={process.env.PUBLIC_URL + '/images/living3.png'} alt="Robot3" />
                        <div className={ProductStyles.tex}>
                            <h2>Rapidlysteadily surmount obstacles</h2>
                            <p>
                                X30 can flexibly climb up and down stairs at a 45° angle; it can stably climb industrial
                                stairs, respond to sudden task requirements the first time, and quickly traverse into
                                complex scenes.
                            </p>
                        </div>
                    </div>
                </a>
                <div className={ProductStyles.background}>
                    <a href="https://swit2019.cafe24.com/" target="_blank" rel="noreferrer">
                        <div className={ProductStyles.sec4}>
                            <div className={ProductStyles.tex}>
                                <h2>Rapidlysteadily surmount obstacles</h2>
                                <p>
                                    X30 can flexibly climb up and down stairs at a 45° angle; it can stably climb
                                    industrial stairs, respond to sudden task requirements the first time, and quickly
                                    traverse into complex scenes.
                                </p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/images/living4.png'} alt="Robot4" />
                        </div>
                    </a>
                </div>
            </div>
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
                        주소 : 04316 서울특별시 용산구 원효로89길 3-4 (원효로1가) 석선빌딩 101호
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
                        통신판매업신고 : 제 2020-서울용산-1041호
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
