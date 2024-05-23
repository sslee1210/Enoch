import React from 'react';
import FooterStyles from './Footer.module.css';
const Footer = () => {
    return (
        <div className={FooterStyles.footer}>
            <div className={FooterStyles.footer_container}>
                <div className={FooterStyles.f_container1}>
                    <p> 상호명 : 이노치코리아 대표 : 정경영 </p>
                    <p> 전화 : 02-2268-8770 팩스 : 0504-163-8775 </p>
                    <p>주소 : 04316 서울특별시 용산구 원효로89길 3-4 (원효로1가) 석선빌딩 101호</p>
                </div>

                <div className={FooterStyles.f_container2}>
                    <p>사업자등록번호 : 716-88-01776 [사업자정보확인]</p>
                    <p>통신판매업신고 : 제 2020-서울용산-1041호</p>

                    <p>개인정보보호책임자 : 정경영 (michelky@naver.com)</p>
                    <p className={FooterStyles.copylight}>&copy; 2024 Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
