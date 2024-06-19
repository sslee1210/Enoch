import React, { useState } from 'react';
import GuideStyles from './Guide.module.css';

const Guide = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = (fileId) => {
        setIsDownloading(true);

        try {
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
        <div className={GuideStyles.Guide}>
            <div className={GuideStyles.Guide1}>
                <h1>Download File</h1>
                <div className={GuideStyles.GuideText}>음성증폭기</div>
                <div className={GuideStyles.Guidep}>
                    <p>
                        <button
                            className={GuideStyles.button}
                            onClick={() => handleDownload('1FPQv7dWVDpOiipLH8N-qDtYSw1xkCWBU')}
                        >
                            1. TS-22 설명서
                            <img src="/images/down.png" alt="download" className={GuideStyles.download} />
                        </button>
                    </p>

                    <p>
                        <button
                            className={GuideStyles.button}
                            onClick={() => handleDownload('1Y5N8euXOl079CNOT8C4CAiEaROo_zsuL')}
                        >
                            2. TS-22(DELUX) 설명서
                            <img src="/images/down.png" alt="download" className={GuideStyles.download} />
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Guide;
