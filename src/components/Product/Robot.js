import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';

const Robot = () => {
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
                <img src={process.env.PUBLIC_URL + '/images/Robot.jpg'} alt="Robot" />

                <h2>A Flagship Product Born for the Industry</h2>
                <p>
                    X30 quadruped robot, a flagship product designed to meet core industry needs in multiple fields
                    including inspection, investigation, security, surveying and mapping.
                </p>
            </div>
            <div className={ProductStyles.menu}>
                <ul>
                    <li>
                        <Link to="/robot">Robot</Link>
                    </li>
                    <li>
                        <Link to="/pc">Pc</Link>
                    </li>
                    <li>
                        <Link to="/living">Living Product</Link>
                    </li>
                    <li>
                        <Link to="/appliance">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/etc">Etc</Link>
                    </li>
                </ul>
            </div>
            <div className={ProductStyles.sec}>
                <div className={ProductStyles.sec1}>
                    <img src={process.env.PUBLIC_URL + '/images/robot01.png'} alt="Robot1" />
                    <div className={ProductStyles.tex}>
                        <h2>Unstoppable operation in Extreme weather</h2>
                        <p>Operate from -20°C to 55°C; IP67 protection.</p>
                    </div>
                </div>
                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec2}>
                        <div className={ProductStyles.tex}>
                            <h2>Rapidly steadily surmount obstacles</h2>
                            <p>
                                X30 can flexibly climb up and down stairs at a 45° angle; it can stably climb industrial
                                stairs, respond to sudden task requirements the first time, and quickly traverse into
                                complex scenes.
                            </p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/robot02.png'} alt="Robot2" />
                    </div>
                </div>
                <div className={ProductStyles.sec3}>
                    <img src={process.env.PUBLIC_URL + '/images/robot03.png'} alt="Robot3" />
                    <div className={ProductStyles.tex}>
                        <h2>Fusion perception strike through darkness</h2>
                        <p>
                            With X30's unique integrated perception, it can autonomously navigate and operate in extreme
                            environments such as darkness, strong light, flickering, and even without any light source.
                        </p>
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
        </div>
    );
};

export default Robot;
