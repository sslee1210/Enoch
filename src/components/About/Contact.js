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

        // 커스텀 오버레이 생성
        const content = document.createElement('div');
        const button = document.createElement('button');
        button.innerHTML = '길찾기';
        button.className = ContactStyles.CustomButton;

        content.appendChild(button);

        const customOverlay = new kakao.maps.CustomOverlay({
            content: content,
            position: marker.getPosition(),
            yAnchor: 1.7, // yAnchor 값을 조정하여 오버레이를 마커 위에 표시
        });

        // 오버레이 버튼 클릭 시 길찾기 페이지로 이동
        button.addEventListener('click', () => {
            const url = `https://map.kakao.com/link/to/길찾기할장소명,37.4824322,126.8774539`;
            window.open(url, '_blank');
        });

        // 마커 클릭 시 커스텀 오버레이 표시
        kakao.maps.event.addListener(marker, 'click', function () {
            customOverlay.setMap(map);
        });

        // 지도 클릭 시 커스텀 오버레이 제거 (마커 클릭 제외)
        kakao.maps.event.addListener(map, 'click', function () {
            customOverlay.setMap(null);
        });

        const handleResize = () => {
            map.setCenter(new kakao.maps.LatLng(37.4824322, 126.8774539));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={ContactStyles.Contact}>
            <h1>CONTACT US</h1>
            <div className={ContactStyles.ContactText}>
                <h3 className={ContactStyles.ContactTitle}>
                    서울특별시 금천구 <br /> 가산디지털로 백상스타타워2차 14층
                </h3>
                <p>TEL : 02-2268-8770 </p>
                <p>FAX : 0504-163-8775</p>
                <p>www.enokorea.com</p>
                <div id="myMap" className={ContactStyles.Map} />
            </div>
        </div>
    );
};

export default Contact;
