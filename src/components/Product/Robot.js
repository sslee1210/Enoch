import React from 'react';
import { Link } from 'react-router-dom';
import RobotStyles from './Robot.module.css';

const Robot = () => {
    return (
        <div>
            <div className={RobotStyles.productbanner}>
                <img src={process.env.PUBLIC_URL + '/images/Robot.jpg'} alt="Robot" />

                <p className={RobotStyles.imgtitle}>A Flagship Product Born for the Industry</p>
                <p className={RobotStyles.imgtext}>
                    X30 quadruped robot, a flagship product designed to meet core industry needs in multiple fields
                    including
                    <br /> inspection, investigation, security, surveying and mapping.
                </p>
            </div>

            <div className={RobotStyles.menuwrap}>
                <div className={RobotStyles.menu}>
                    <ul className={RobotStyles.clearfix}>
                        <li className={RobotStyles.submenu}>
                            <Link to="/robot">Robot</Link>
                        </li>
                        <li className={RobotStyles.submenu}>
                            <Link to="/pc">Pc</Link>
                        </li>
                        <li className={RobotStyles.submenu}>
                            <Link to="/living">Living Product</Link>
                        </li>
                        <li className={RobotStyles.submenu}>
                            <Link to="/appliance">생활가전</Link>
                        </li>
                        <li className={RobotStyles.submenu}>
                            <Link to="/etc">Etc</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/Robot1.png'} alt="Robot1" />
                <h2>Unstoppable operation in Extreme weather</h2>
                <p>Operate from -20°C to 55°C; IP67 protection.</p>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/Robot2.png'} alt="Robot2" />
                <h2>Rapidlysteadily surmount obstacles</h2>
                <p>
                    X30 can flexibly climb up and down stairs at a 45° angle; it can stably climb industrial stairs,
                    respond to sudden task requirements the first time, and quickly traverse into complex scenes.
                </p>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/Robot3.png'} alt="Robot3" />
                <h2>Fusion perceptionstrike through darkness</h2>
                <p>
                    With X30's unique integrated perception, it can autonomously navigate and operate in extreme
                    environments such as darkness, strong light, flickering, and even without any light source.
                </p>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/Robot4.png'} alt="Robot4" />
            </div>
        </div>
    );
};

export default Robot;
