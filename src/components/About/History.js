import React from 'react';
import HistoryStyles from './History.module.css';

const History = () => {
    return (
        <div className={HistoryStyles.History}>
            <h1>HISTORY</h1>
            <img src={process.env.PUBLIC_URL + '/images/History.png'} alt="History" />

            <div className={HistoryStyles.footer}>
                <p>
                    상호명 : 이노치코리아 대표 :정경영
                    <br />
                    전화 : 02-2268-8770 팩스 : 0504-163-8775
                    <br />
                    주소 : 08504 서울특별시 금천구 가산디지털2로 165 백상스타타워2차 14층 1406호
                </p>
                <p>
                    사업자등록번호 : 716-88-01776 [사업자정보확인]
                    <br /> 통신판매업신고 : 제 2020-서울용산-1041호
                    <br />
                    개인정보보호책임자 : 정경영 (michelky@naver.com)
                </p>
            </div>
        </div>
    );
};

export default History;
