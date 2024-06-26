import React from 'react';
import AboutStyles from './About.module.css';
import i18n from '../../lacale/i18n';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className={AboutStyles.About}>
            <h1>{t('회사 소개')}</h1>

            <div className={AboutStyles.alltext}>
                <h2>{t('최초가 되기 보다는 제대로 하는 기업')}</h2>
                <p>
                    {t(
                        '전 세계가 대유행에 맞서 모든 흐름이 뒤바뀐 지금 달라지는 사회구조와 트렌드의 변화로 현실에 발맞추는 요구가 강해지고 있습니다. 코로나19로 인한 문화충격과 4차 산업혁명 시대를 맞으며 인공 지능(AI), 빅데이터, 사물 인터넷(loT), 클라우드 컴퓨팅, 모바일 등 지능정보기술이 기존의 산업과 서비스 또는 3D 프린팅, 로봇공학, 생명공학, 나노기술 등 신기술과 결합되어 모든 제품·서비스를 네트워크로 연결하고 사물을 지능화하는 새로운 문화로의 변화는 삶의 패러다임을 바꾸고 있습니다. 이에 이노치코리아는 지금까지 쌓아온 디지털 음향기기, 미니컴퓨터, 건강가전 및 생활가전과 기타 디지털 소품 등의 상품개발 및 판매 노하우를 바탕으로 새롭게 도래하는 디지털 문화에 발 맞춰 A.I 기능을 활용한 Smart Writing Pad, Smart Pen, A.I Mouse, A.I Translator, A.I 소형 Robot 등을 준비하고 있습니다. 저희 이노치코리아는 어떤 일을 하는 가장 빠른 방법은 처음부터 올바르게 하는 것이라는 경영철학을 가지고 변화되는 새로운 문화로의 나아감에 있어 항상 미래지향적인 제품과 사용자의 편의성과 필요성을 극대화 하여 삶의 질 향상과 즐거움을 가질 수 있는 제품을 개발하고 만들고자 모든 임직원이 함께 열심히 노력하겠습니다. 어려운 경제 상황과 기후변화, 고령화 사회, 청년층의 기회 상실 등 복잡하고 어려운 사회 변화의 여건 속에서도 이노치코리아가 소비자에게 신뢰받으며 성장하는 기업이 될 수 있도록 많은 격려 부탁드립니다.'
                    )}
                </p>
                <p className={AboutStyles.RightText}>
                    {t('주식회사 이노치코리아')}
                    <br />
                    {t('대표이사 정경영')}
                </p>
            </div>
        </div>
    );
};

export default About;
