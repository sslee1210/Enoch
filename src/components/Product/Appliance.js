import React from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';

const Appliance = () => {
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
                        <Link to="/appliance">생활가전</Link>
                    </li>
                    <li>
                        <Link to="/etc">Etc</Link>
                    </li>
                </ul>
            </div>
            <div className={ProductStyles.sec}>
                <div className={ProductStyles.sec1}>
                    <img src={process.env.PUBLIC_URL + '/images/Robot1.png'} alt="Robot1" />
                    <div className={ProductStyles.tex}>
                        <h2>Unstoppable operation in Extreme weather</h2>
                        <p>Operate from -20°C to 55°C; IP67 protection.</p>
                    </div>
                </div>
                <div className={ProductStyles.sec2}>
                    <div className={ProductStyles.tex}>
                        <h2>Rapidlysteadily surmount obstacles</h2>
                        <p>
                            X30 can flexibly climb up and down stairs at a 45° angle; it can stably climb industrial
                            stairs, respond to sudden task requirements the first time, and quickly traverse into
                            complex scenes.
                        </p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/images/Robot2.png'} alt="Robot2" />
                </div>
                <div className={ProductStyles.sec3}>
                    <img src={process.env.PUBLIC_URL + '/images/Robot3.png'} alt="Robot3" />
                    <div className={ProductStyles.tex}>
                        <h2>Rapidlysteadily surmount obstacles</h2>
                        <p>
                            X30 can flexibly climb up and down stairs at a 45° angle; it can stably climb industrial
                            stairs, respond to sudden task requirements the first time, and quickly traverse into
                            complex scenes.
                        </p>
                    </div>
                </div>
                <div className={ProductStyles.sec4}>
                    <div className={ProductStyles.tex}>
                        <h2>Rapidlysteadily surmount obstacles</h2>
                        <p>
                            X30 can flexibly climb up and down stairs at a 45° angle; it can stably climb industrial
                            stairs, respond to sudden task requirements the first time, and quickly traverse into
                            complex scenes.
                        </p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/images/Robot4.png'} alt="Robot4" />
                </div>
            </div>
        </div>
    );
};

export default Appliance;
