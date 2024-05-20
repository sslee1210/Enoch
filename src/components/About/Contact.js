import React, { useEffect } from 'react';
import ContactStyles from './Contact.module.css';

const { kakao } = window;

const Contact = () => {
    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(37.4824322, 126.8774539),
            level: 3,
        };

        const map = new kakao.maps.Map(container, options);

        // 지도 중심에 마커 생성
        const marker = new kakao.maps.Marker({
            position: map.getCenter(),
        });
        marker.setMap(map);

        const handleResize = () => {
            map.setCenter(new kakao.maps.LatLng(37.4824322, 126.8774539));
        };

        window.addEventListener('resize', handleResize);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // 빈 배열을 의존성 배열로 추가하여 useEffect가 한 번만 실행되도록 함

    return (
        <div className={ContactStyles.Contact}>
            <h1>CONTACT US</h1>
            <div className={ContactStyles.ContactText}>
                <h3 className={ContactStyles.ContactTitle}>
                    서울특별시 금천구 <br /> 가산디지털로 백상스타타워2차 14층
                </h3>
                <p>
                    TEL : 02-2268-8770 <br />
                    FAX : 0504-163-8775 <br />
                    www.enokorea.com
                </p>
            </div>
            <div
                id="myMap"
                className={ContactStyles.Map}
                style={{
                    width: '50%',
                    height: '45%',
                }}
            ></div>

            <div className={ContactStyles.footer}>
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

export default Contact;
