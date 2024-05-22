import React from 'react';
import GlobalStyles from './Global.module.css';

const Global = () => {
    return (
        <div className={GlobalStyles.Global}>
            <h1>해외 법인</h1>

            <div className={GlobalStyles.Wrap}>
                <div className={GlobalStyles.Container}>
                    <h4 className={GlobalStyles.Title}>Trading Company</h4>
                    <h4 className={GlobalStyles.SubTitle}>
                        Enoch H.K <br /> International
                    </h4>
                    <img
                        src={process.env.PUBLIC_URL + '/images/글로벌1.png'}
                        alt="글로벌1"
                        className={GlobalStyles.GlobalImg}
                    ></img>
                </div>

                <div className={GlobalStyles.Container}>
                    <h4 className={GlobalStyles.Title}>R&D Manufacturer</h4>
                    <h4 className={GlobalStyles.SubTitle}>
                        Shenzhen Enoch <br /> Technology
                    </h4>
                    <img
                        src={process.env.PUBLIC_URL + '/images/글로벌2.png'}
                        alt="글로벌2"
                        className={GlobalStyles.GlobalImg}
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Global;
