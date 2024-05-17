import React, { useEffect } from 'react';

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
        var marker = new kakao.maps.Marker({
            position: map.getCenter(),
        });
        marker.setMap(map);
    }, []);

    return (
        <div>
            <h1>CONTACT US</h1>

            <h3>
                서울특별시 금천구 <br /> 가산디지털로 백상스타타워2차 14층
            </h3>
            <p>
                TEL : 02-2268-8770 <br />
                FAX : 0504-163-8775 <br />
                www.enokorea.com
            </p>

            <div
                id="myMap"
                style={{
                    width: '500px',
                    height: '500px',
                }}
            ></div>
        </div>
    );
};

export default Contact;
