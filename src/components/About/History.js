import React from 'react';
import HistoryStyles from './History.module.css';

const History = () => {
    return (
        <div className={HistoryStyles.History}>
            <h1>HISTORY</h1>

            <img src={process.env.PUBLIC_URL + '/images/History.png'} alt="History" />
        </div>
    );
};

export default History;
