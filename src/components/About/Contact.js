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
            <div className={ContactStyles.Contact1}>
                <h1>CONTACT US</h1>
                <div className={ContactStyles.ContactText}>
                    <h3 className={ContactStyles.ContactTitle}>
                        서울특별시 금천구 <br /> 가산디지털로 백상스타타워2차 14층
                    </h3>
                    <p>TEL : 02-2268-8770 </p>
                    <p>FAX : 0504-163-8775</p>
                    <p>www.enokorea.com</p>
                </div>
                <div
                    id="myMap"
                    className={ContactStyles.Map}
                    style={{
                        width: '50%',
                        height: '50%',
                        left: '30vw',
                        bottom: '5vw',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Contact;
