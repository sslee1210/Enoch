import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopNavstyles from './TopNav.module.css';

const TopNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleSubMenu = (index) => {
        if (activeSubMenu === index) {
            setActiveSubMenu(null);
        } else {
            setActiveSubMenu(index);
        }
    };

    return (
        <div className={TopNavstyles.nav}>
            <Link to="/" className={TopNavstyles.logo}>
                로고
            </Link>
            <div className={TopNavstyles.hamburger} onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={isNavOpen ? `${TopNavstyles.navList} ${TopNavstyles.active}` : TopNavstyles.navList}>
                <ul className={TopNavstyles.navItems}>
                    <li className={TopNavstyles.navItem}>
                        <Link to="/about/intro" className={TopNavstyles.navLink} onClick={() => toggleSubMenu(0)}>
                            About
                        </Link>
                        <ul className={`${TopNavstyles.subMenu} ${activeSubMenu === 0 ? TopNavstyles.active : ''}`}>
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
                        <Link to="/community/news" className={TopNavstyles.navLink} onClick={() => toggleSubMenu(1)}>
                            Community
                        </Link>
                        <ul className={`${TopNavstyles.subMenu} ${activeSubMenu === 0 ? TopNavstyles.active : ''}`}>
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
                        <Link to="/support" className={TopNavstyles.navLink} onClick={() => toggleSubMenu(2)}>
                            Support
                        </Link>
                        <ul className={`${TopNavstyles.subMenu} ${activeSubMenu === 0 ? TopNavstyles.active : ''}`}>
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
