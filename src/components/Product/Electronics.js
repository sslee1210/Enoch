import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';

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
                <img src={process.env.PUBLIC_URL + '/images/Electronic.png'} alt="Robot" />
                <h2>Electronics</h2>
                <p>이노치 코리아에서 추천하는 생활 가전</p>
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
                    <img src={process.env.PUBLIC_URL + '/images/electronic3.png'} alt="Robot3" />
                    <div className={ProductStyles.tex}>
                        <h2>식기 세척기</h2>
                        <p>
                            특허받은 45&deg; 컵 스프레이와 360&deg; 회전 스프레이 세척 및 복합 린스 방식으로 살균율
                            99.99%!
                            <br />
                            설거지, 건조, 저장까지 모두 가능한 모던한 외형의 식기세척기
                        </p>
                    </div>
                </div>

                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec2}>
                        <div className={ProductStyles.tex}>
                            <h2>제습기</h2>
                            <p>
                                1.5L의 대용량 물탱크를 보유하고 강력한
                                <br />
                                제습 효과를 자랑하는 제습기
                            </p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/electronic4.png'} alt="Robot4" />
                    </div>
                </div>
            </div>

            <img
                src={process.env.PUBLIC_URL + '/images/Up.png'}
                onClick={MoveToTop}
                className={ProductStyles.up}
                style={{ opacity: opacity }}
                alt="Move to Top"
            />
        </div>
    );
};

export default Electronics;
