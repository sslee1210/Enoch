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
        content.innerHTML = `<button class="${ContactStyles.CustomButton}">길찾기</button>`;
        content.style.position = 'absolute';
        content.style.zIndex = '9999';

        const customOverlay = new kakao.maps.CustomOverlay({
            content: content,
            position: marker.getPosition(),
            yAnchor: 1,
        });

        // 오버레이 버튼 클릭 시 길찾기 페이지로 이동
        content.querySelector('button').addEventListener('click', () => {
            const url = `https://map.kakao.com/link/to/길찾기할장소명,37.4824322,126.8774539`; // '길찾기할장소명'을 원하는 대상으로 변경
            window.open(url, '_blank'); // 새 창에서 링크 열기
        });

        // 마커 클릭 시 커스텀 오버레이 표시
        kakao.maps.event.addListener(marker, 'click', function () {
            customOverlay.setMap(map);
        });

        // 지도 클릭 시 커스텀 오버레이 제거
        kakao.maps.event.addListener(map, 'click', function () {
            customOverlay.setMap(null);
        });

        const handleResize = () => {
            map.setCenter(new kakao.maps.LatLng(37.4824322, 126.8774539));
        };

        window.addEventListener('resize', handleResize);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
            kakao.maps.event.removeListener(map, 'click');
            kakao.maps.event.removeListener(marker, 'click');
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
                <div id="myMap" className={ContactStyles.Map} />
            </div>
        </div>
    );
};

export default Contact;
