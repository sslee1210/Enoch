import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'; // 여기에 Link 컴포넌트를 임포트합니다.

const Main = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img src="/images/배너1.png" alt="Image 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/배너2.png" alt="Image 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/배너3.png" alt="Image 3" />
                </SwiperSlide>
            </Swiper>
            <div>
                <h1>Product</h1>
                <div>
                    <Link to="/Robot">
                        {' '}
                        {/* <a> 대신 <Link>를 사용합니다. */}
                        <img src="/images/로봇.png" alt="로봇" />
                    </Link>
                </div>

                <div>
                    <Link to="/PC">
                        <img src="/images/컴퓨터.png" alt="컴퓨터" />
                    </Link>
                </div>

                <div>
                    <Link to="/Living Product">
                        <img src="/images/리빙.png" alt="리빙" />
                    </Link>
                </div>

                <div>
                    <Link to="/생활가전">
                        <img src="/images/생활.png" alt="생활가전" />
                    </Link>
                </div>
            </div>

            <div>
                <Link to="/Etc">
                    <img src="/images/기타.png" alt="기타" />
                </Link>
            </div>
            <div>
                <p>
                    상호명 : 이노치코리아 대표 : 정경영 전화 : 02-2268-8770 팩스 : 0504-163-8775 주소 :04316 서울특별시
                    용산구 원효로89길 3-4 (원효로1가) 석선빌딩 101호
                </p>
                <p>
                    사업자등록번호 : 716-88-01776 [사업자정보확인] 통신판매업신고 : 제 2020-서울용산-1041호
                    개인정보보호책임자 : 정경영 (michelky@naver.com)
                </p>
            </div>
        </div>
    );
};

export default Main;
