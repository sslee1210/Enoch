import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DetaleStyles from './Detail.module.css';

const Ts22 = () => {
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
                <img src="/images/Ts22-1.jpg" alt="TS-22-1" />
                <img src="/images/Ts22-2.jpg" alt="TS-22-2" />
                <img src="/images/Ts22-3.jpg" alt="TS-22-3" />
                <img src="/images/Ts22-4.jpg" alt="TS-22-4" />
                <img src="/images/Ts22-5.jpg" alt="TS-22-5" />
                <img src="/images/Ts22-6.jpg" alt="TS-22-6" />
                <img src="/images/Ts22-7.jpg" alt="TS-22-7" />
                <img src="/images/Ts22-8.jpg" alt="TS-22-8" />
                <img src="/images/Ts22-9.jpg" alt="TS-22-9" />
                <img src="/images/Ts22-10.jpg" alt="TS-22-10" />
                <img src="/images/Ts22-11.jpg" alt="TS-22-11" />
                <img src="/images/Ts22-12.jpg" alt="TS-22-12" />
                <img src="/images/Ts22-13.jpg" alt="TS-22-13" />
                <img src="/images/Ts22-14.jpg" alt="TS-22-14" />
                <img src="/images/Ts22-15.jpg" alt="TS-22-15" />
                <img src="/images/Ts22-16.jpg" alt="TS-22-16" />
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

export default Ts22;
