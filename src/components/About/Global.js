import React from 'react';
import GlobalStyles from './Global.module.css';

const Global = () => {
    return (
        <div className={GlobalStyles.Global}>
            <h1>해외 법인</h1>
            <img src={process.env.PUBLIC_URL + '/images/global.png'} alt="Global" />
        </div>
    );
};

export default Global;
