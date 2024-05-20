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

            <div className={GlobalStyles.footer}>
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

export default Global;
