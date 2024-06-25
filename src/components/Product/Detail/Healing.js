import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DetaleStyles from './Detail.module.css';

const Healing = () => {
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
                <img src="/images/Healing page.png" alt="Healing 상세페이지" />
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

export default Healing;
