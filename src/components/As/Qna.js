import React, { useState } from 'react';
import QnaStyles from './Qna.module.css';

const FaqItem = ({ title, text }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`${QnaStyles.faq} ${isActive ? QnaStyles.active : ''}`}>
            <h3 className={QnaStyles.faqTitle} onClick={() => setIsActive(!isActive)}>
                {title}
                <button className={QnaStyles.faqToggle}>
                    <i className={`fas ${isActive ? 'fa-times' : 'fa-chevron-down'}`}></i>
                </button>
            </h3>
            {isActive && <p className={QnaStyles.faqText}>{text}</p>}
        </div>
    );
};

const Qna = () => {
    return (
        <div className={QnaStyles.qna}>
            <h1>자주 묻는 질문</h1>
            <div className={QnaStyles.faqContainer}>
                <FaqItem title="배송은 얼마나 걸리나요?" text="A: 당일 4시 전 주문 시 당일 출고 됩니다." />
                <FaqItem
                    title="반품 정책이 어떻게 되죠?"
                    text="제품 수령 후 7일 이내에 반품을 요청하실 수 있습니다. 반품 배송비는 고객 부담이며, 제품 검사 후 환불이 진행됩니다."
                />
                <FaqItem
                    title="예약한 서비스는 시간이 어느정도 걸리나요?"
                    text="서비스 유형에 따라 소요 시간이 다를 수 있습니다. 일반적으로, 단일 서비스의 경우 1~2시간 내에 완료됩니다. 서비스에 대한 자세한 질문이 있으시면 언제든지 문의해 주세요."
                />
                <FaqItem
                    title="제품이 환경에 유해하지는 않을까요?"
                    text="저희는 환경 보호를 매우 중요하게 생각하며, 지속 가능한 자원을 사용하여 제품을 제조하고 있습니다. 모든 제품은 환경에 미치는 영향을 최소화하기 위해 엄격한 기준 하에 생산됩니다."
                />
            </div>
        </div>
    );
};

export default Qna;
