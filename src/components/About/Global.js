import React, { useState, useEffect } from 'react';
import GlobalStyles from './Global.module.css';
import { useTranslation } from 'react-i18next';

const Global = () => {
    const { t } = useTranslation();
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = process.env.PUBLIC_URL + '/images/global.png';
        img.onload = () => setImageLoaded(true);
    }, []);

    return (
        <div className={GlobalStyles.Global}>
            <h1>{t('해외 법인')}</h1>
            {!imageLoaded && <div className={GlobalStyles.placeholder}>Loading...</div>}
            <img
                src={process.env.PUBLIC_URL + '/images/global.png'}
                alt="Global"
                className={`${GlobalStyles.globalImage} ${imageLoaded ? GlobalStyles.loaded : ''}`}
                onLoad={() => setImageLoaded(true)}
            />
        </div>
    );
};

export default Global;
