import React from 'react';
import SupportStyles from './Support.module.css';

const Support = () => {
    return (
        <div className={SupportStyles.support}>
            <div className={SupportStyles.menu}>
                <img src="/images/조리로봇 브로슈어 최종-01.png" alt="브로슈어1" />
                <img src="/images/조리로봇 브로슈어 최종-02.png" alt="브로슈어2" />
                <img src="/images/조리로봇 브로슈어 최종-03.png" alt="브로슈어3" />
                <img src="/images/조리로봇 브로슈어 최종-04.png" alt="브로슈어4" />
                <img src="/images/조리로봇 브로슈어 최종-05.png" alt="브로슈어5" />
                <img src="/images/조리로봇 브로슈어 최종-06.png" alt="브로슈어6" />
                <img src="/images/조리로봇 브로슈어 최종-07.png" alt="브로슈어7" />
                <img src="/images/조리로봇 브로슈어 최종-08.png" alt="브로슈어8" />
                <img src="/images/조리로봇 브로슈어 최종-09.png" alt="브로슈어9" />
                <img src="/images/조리로봇 브로슈어 최종-10.png" alt="브로슈어10" />
                <img src="/images/조리로봇 브로슈어 최종-11.png" alt="브로슈어11" />
            </div>
            <video controls>
                <source src="/videos/robot.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Support;
