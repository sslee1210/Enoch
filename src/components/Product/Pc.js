import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';
import FooterStyles from '../Subpage/Footer.module.css';

const Pc = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            if (scrollPosition + windowHeight >= fullHeight) {
                setOpacity(0);
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
                <img src={process.env.PUBLIC_URL + '/images/PC.png'} alt="Pc" />
                <h2>PC</h2>
                <p>최신 기술과 혁신적인 디자인이 결합된 고성능 PC</p>
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
                    <img src={process.env.PUBLIC_URL + '/images/Pc1.png'} alt="Pc1" />
                    <div className={ProductStyles.tex}>
                        <h2>Unlock it all with the touch of your finger.</h2>
                        <p>
                            The comfortable and quiet backlit Magic Keyboard comes with full-height function keys and
                            Touch ID, which gives you a fast, easy, and secure way to unlock your Mac and sign in to
                            apps and sites — all at the touch of a finger.
                        </p>
                    </div>
                </div>

                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec2}>
                        <div className={ProductStyles.tex}>
                            <h2>Designed to go places.</h2>
                            <p>
                                Superlight and under half an inch thin, MacBook Air fits easily into your life and is
                                built with the planet in mind. MacBook Air with M3 is made with 50 percent recycled
                                materials — an Apple first. And all MacBook Air laptops have a durable recycled aluminum
                                enclosure.
                            </p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/Pc2.png'} alt="Pc2" />
                    </div>
                </div>

                <div className={ProductStyles.sec3}>
                    <img src={process.env.PUBLIC_URL + '/images/Pc3.png'} alt="Pc3" />
                    <div className={ProductStyles.tex}>
                        <h2>A chipload of power.</h2>
                        <p>
                            The moment you open your MacBook Air, it’s ready for whatever you throw at it. And no matter
                            how intense the workload, it stays silent thanks to a fanless design. Whether you’re
                            multitasking between apps, editing videos in iMovie, or playing Baldur’s Gate 3 in Game
                            Mode, the M3 chip brings more speed and fluidity to everything you do.
                        </p>
                    </div>
                </div>

                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec4}>
                        <div className={ProductStyles.tex}>
                            <h2>Let’s be clear. It’s brilliant.</h2>
                            <p>
                                The Liquid Retina display on MacBook Air is a sight to behold, with support for 1
                                billion colors and up to 2x the resolution of comparable PC laptops. Photos and videos
                                pop with rich contrast and sharp detail, and text appears supercrisp for easy reading.
                            </p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/Pc4.png'} alt="Pc4" />
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

export default Pc;
