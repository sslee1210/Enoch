import React from 'react';
import SupportStyles from './Support.module.css';

const Support = () => {
    return (
        <div className={SupportStyles.support}>
            <div className={SupportStyles.support1}>
                <h1>Download File</h1>
                <p>다운로드 가능한 파일이 없습니다.</p>
            </div>
        </div>
    );
};

export default Support;
