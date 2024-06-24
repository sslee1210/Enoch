import React, { useState } from 'react';
import SupportStyles from './Support.module.css';

const Support = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = () => {
        setIsDownloading(true);

        try {
            const fileId = '16Vqc1Pq-9GQqXpPEnwiM02gLkEdjqQZl'; // 공유 링크의 파일 ID
            const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

            // 새 창에서 Google Drive 공유 링크 열기
            window.open(downloadUrl, '_blank');
        } catch (error) {
            console.error('Error downloading file:', error);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className={SupportStyles.support}>
            <div className={SupportStyles.menu}>
                <img src="/images/조리로봇 브로슈어 최종-01.png" />
                <img src="/images/조리로봇 브로슈어 최종-02.png" />
                <img src="/images/조리로봇 브로슈어 최종-03.png" />
                <img src="/images/조리로봇 브로슈어 최종-04.png" />
                <img src="/images/조리로봇 브로슈어 최종-05.png" />
                <img src="/images/조리로봇 브로슈어 최종-06.png" />
                <img src="/images/조리로봇 브로슈어 최종-07.png" />
                <img src="/images/조리로봇 브로슈어 최종-08.png" />
                <img src="/images/조리로봇 브로슈어 최종-09.png" />
                <img src="/images/조리로봇 브로슈어 최종-10.png" />
                <img src="/images/조리로봇 브로슈어 최종-11.png" />
            </div>
        </div>
    );
};

export default Support;
