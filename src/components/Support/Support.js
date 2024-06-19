import React, { useState } from 'react';
import SupportStyles from './Support.module.css';

const Support = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = () => {
        setIsDownloading(true);

        try {
            const fileId = '1W1-Fqhk9ryCTicuqLQTO4wweD-GSsAiE'; // 공유 링크의 파일 ID
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
            <div className={SupportStyles.support1}>
                <h1>Download File</h1>
                <div className={SupportStyles.supportText}>로봇</div>
                <p>
                    <button className={SupportStyles.button} onClick={handleDownload}>
                        1. 조리로봇 브로슈어
                        <img src="/images/down.png" alt="download" className={SupportStyles.download} />
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Support;
