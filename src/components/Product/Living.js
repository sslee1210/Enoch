import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';

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
        </div>
    );
};
export default Living;
