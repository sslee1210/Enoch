import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductStyles from './Product.module.css';

const Etc = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 84) {
                setOpacity(1);
            } else {
                setOpacity(scrollPosition / 84);
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
        <div className={ProductStyles.product}>
            <div className={ProductStyles.big}>
                <img src={process.env.PUBLIC_URL + '/images/Etc.png'} alt="Etc" />
                <h2>The Best Noise Canceling Earbuds</h2>
                <p>
                    The WF-1000XM5 features cutting-edge technology to deliver premium sound quality and the best
                    noise-canceling performance on the market.
                </p>
            </div>
            <div className={ProductStyles.menu}>
                <ul>
                    <li>
                        <Link to="/robot">Robot</Link>
                    </li>
                    <li>
                        <Link to="/pc">Pc</Link>
                    </li>
                    <li>
                        <Link to="/living">Living Product</Link>
                    </li>
                    <li>
                        <Link to="/appliance">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/etc">Etc</Link>
                    </li>
                </ul>
            </div>
            <div className={ProductStyles.sec}>
                <div className={ProductStyles.sec1}>
                    <img src={process.env.PUBLIC_URL + '/images/Etc1.png'} alt="Etc1" />
                    <div className={ProductStyles.tex}>
                        <h2>Feel a more stable fitting earbud</h2>
                        <p>
                            Noise Isolation Earbud Tips feature a unique polyurethane foam material which reduces noise
                            in the high-frequency range. Soft and elastic, they maximize the contact area between the
                            earbud tip and the ear canal, insulating your sound and reducing noise. It also improves
                            adhesion to the ear canal for a more secure, stable fit.
                        </p>
                    </div>
                </div>
                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec2}>
                        <div className={ProductStyles.tex}>
                            <h2>Multi Noise Sensor technology</h2>
                            <p>
                                Three microphones on each earbud, including dual feedback mics, improve low-frequency
                                cancellation performance. This is our biggest ever step forward in noise canceling,
                                resulting in ambient sound captured even more accurately. So you can enjoy one of our
                                purest sounds.
                            </p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/Etc2.png'} alt="Etc2" />
                    </div>
                </div>
                <div className={ProductStyles.sec3}>
                    <img src={process.env.PUBLIC_URL + '/images/Etc3.png'} alt="Etc3" />
                    <div className={ProductStyles.tex}>
                        <h2>Unbeatable Noise Cancellation</h2>
                        <p>
                            Exclusively developed by Sony, the Integrated Processor V2 unlocks the full potential of our
                            HD Noise Cancelling Processor QN2e. This unique combination of technology controls the six
                            microphones, across both ears, to deliver unprecedented noise-cancelling quality that can be
                            adapted to provide the best performance for your environment.
                        </p>
                    </div>
                </div>
                <div className={ProductStyles.background}>
                    <div className={ProductStyles.sec4}>
                        <div className={ProductStyles.tex}>
                            <h2>New high-quality sound and noise canceling driver unit</h2>
                            <p>
                                The specially designed driver unit Dynamic Driver X able to reproduce lower frequencies
                                has been improved using a dome-edge separation structure that combines different
                                materials, allowing for a more accurate generation of cancellation waves in the lower
                                frequencies.
                            </p>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/images/Etc4.png'} alt="Etc4" />
                </div>
            </div>

            <img
                src={process.env.PUBLIC_URL + '/images/Up.png'}
                onClick={MoveToTop}
                className={ProductStyles.up}
                style={{ opacity: opacity }} // 이 부분에서 스타일을 직접 적용하여 opacity를 조절합니다.
                alt="Move to Top"
            />
        </div>
    );
};

export default Etc;
