import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DetaleStyles from './Detail.module.css';

const Eno100 = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollPosition > 84 && scrollPosition < documentHeight - windowHeight - 84) {
                setOpacity(1);
            } else if (scrollPosition <= 84) {
                setOpacity(scrollPosition / 84);
            } else {
                setOpacity((documentHeight - windowHeight - scrollPosition) / 84);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const MoveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={DetaleStyles.Detail}>
            <div className={DetaleStyles.menu}>
                <ul>
                    <li>
                        <Link to="/Product/robot">Robot</Link>
                    </li>
                    <li>
                        <Link to="/Product/pc">PC</Link>
                    </li>
                    <li>
                        <Link to="/Product/Etc">A/V Products</Link>
                    </li>
                    <li>
                        <Link to="/Product/Electronics">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/Product/living">Living Product</Link>
                    </li>
                </ul>
            </div>
            <div className={DetaleStyles.DetailImg}>
                <img src="/images/펫드라이기1.jpg" alt="펫드라이기1 상세페이지" />
                <img src="/images/펫드라이기2.jpg" alt="펫드라이기2 상세페이지" />
                <img src="/images/펫드라이기3.jpg" alt="펫드라이기3 상세페이지" />
                <img src="/images/펫드라이기4.jpg" alt="펫드라이기4 상세페이지" />
                <img src="/images/펫드라이기5.jpg" alt="펫드라이기5 상세페이지" />
                <img src="/images/펫드라이기6.jpg" alt="펫드라이기6 상세페이지" />
                <img src="/images/펫드라이기7.jpg" alt="펫드라이기7 상세페이지" />
                <img src="/images/펫드라이기8.jpg" alt="펫드라이기8 상세페이지" />
                <img src="/images/펫드라이기9.jpg" alt="펫드라이기9 상세페이지" />
                <img src="/images/펫드라이기10.jpg" alt="펫드라이기10 상세페이지" />
            </div>
            <img
                src={process.env.PUBLIC_URL + '/images/Up.png'}
                onClick={MoveToTop}
                className={DetaleStyles.up}
                style={{ opacity: opacity }}
                alt="Move to Top"
            />
        </div>
    );
};

export default Eno100;
