import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TopNavstyles from './TopNav.module.css';

const TopNav = () => {
    const navListRef = useRef(null);
    const hamburgerRef = useRef(null);

    useEffect(() => {
        const toggleMenu = () => {
            if (navListRef.current) {
                navListRef.current.classList.toggle(TopNavstyles.active);
            }
        };

        const hamburger = hamburgerRef.current;
        if (hamburger) {
            hamburger.addEventListener('click', toggleMenu);
        }

        return () => {
            if (hamburger) {
                hamburger.removeEventListener('click', toggleMenu);
            }
        };
    }, []);

    return (
        <div className={TopNavstyles.nav}>
            <Link to="/" className={TopNavstyles.logo}>
                로고
            </Link>
            <div ref={hamburgerRef} className={TopNavstyles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav ref={navListRef} className={TopNavstyles.navList}>
                <ul className={TopNavstyles.navItems}>
                    <li className={TopNavstyles.navItem}>
                        <Link to="/about/intro" className={TopNavstyles.navLink}>
                            About
                        </Link>
                        <ul className={TopNavstyles.subMenu}>
                            <li className={TopNavstyles.subMenuItem}>
                                <Link to="/about/intro" className={TopNavstyles.subMenuLink}>
                                    회사 소개
                                </Link>
                            </li>
                            <li className={TopNavstyles.subMenuItem}>
                                <Link to="/about/history" className={TopNavstyles.subMenuLink}>
                                    HISTORY
                                </Link>
                            </li>
                            <li className={TopNavstyles.subMenuItem}>
                                <Link to="/about/global" className={TopNavstyles.subMenuLink}>
                                    해외 법인
                                </Link>
                            </li>
                            <li className={TopNavstyles.subMenuItem}>
                                <Link to="/about/contact" className={TopNavstyles.subMenuLink}>
                                    CONTACT US
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={TopNavstyles.navItem}>
                        <Link to="/community/news" className={TopNavstyles.navLink}>
                            Community
                        </Link>
                        <ul className={TopNavstyles.subMenu}>
                            <li className={TopNavstyles.subMenuItem}>
                                <Link to="/community/news" className={TopNavstyles.subMenuLink}>
                                    회사 소식
                                </Link>
                            </li>
                            <li className={TopNavstyles.subMenuItem}>
                                <Link to="/community/qna" className={TopNavstyles.subMenuLink}>
                                    자주 묻는 질문
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={TopNavstyles.navItem}>
                        <Link to="/support" className={TopNavstyles.navLink}>
                            Support
                        </Link>
                        <ul className={TopNavstyles.subMenu}>
                            <li className={TopNavstyles.subMenuItem}>
                                <Link to="/support" className={TopNavstyles.subMenuLink}>
                                    Download File
                                </Link>
                            </li>
                            <li className={TopNavstyles.subMenuItem}>
                                <Link to="/support/guide" className={TopNavstyles.subMenuLink}>
                                    사용설명법
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={TopNavstyles.navItem}>
                        <a
                            href="https://swit2019.cafe24.com/"
                            target="_blank"
                            rel="noreferrer"
                            className={TopNavstyles.navLink}
                        >
                            Shop
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TopNav;
