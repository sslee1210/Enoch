import React from 'react';
import GlobalStyles from './Global.module.css';
import i18n from '../../lacale/i18n';
import { useTranslation } from 'react-i18next';

const Global = () => {
    const { t } = useTranslation();
    return (
        <div className={GlobalStyles.Global}>
            <h1>{t('해외 법인')}</h1>
            <img src={process.env.PUBLIC_URL + '/images/global.png'} alt="Global" />
        </div>
    );
};

export default Global;
