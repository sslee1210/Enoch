import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import TopNavstyles from './TopNav.module.css';

const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navListRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleButton = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = (event) => {
        if (event.target.tagName === 'A') {
            setIsOpen(false); // 메뉴 항목 클릭 시 메뉴 닫기
        }
    };

    return (
        <div className={TopNavstyles.nav}>
            <Link to="/" className={TopNavstyles.logo}>
                <img src="/images/enoch 2024 logo.png" alt="로고" />
            </Link>

            <div className={TopNavstyles.hamburger} ref={hamburgerRef}>
                <input
                    type="checkbox"
                    id="hamburger-checkbox"
                    className={TopNavstyles.hamburger_checkbox}
                    checked={isOpen}
                    onChange={toggleButton}
                    aria-label="햄버거 메뉴 버튼"
                />
                <label htmlFor="hamburger-checkbox" className={TopNavstyles.hamburger_label}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <nav
                ref={navListRef}
                className={`${TopNavstyles.navList} ${isOpen ? TopNavstyles.active : ''}`}
                onClick={handleMenuClick}
            >
                <ul className={TopNavstyles.navItems}>
                    <li className={TopNavstyles.navItem}>
                        <Link to="/about/intro" className={TopNavstyles.navLink} onClick={handleMenuClick}>
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
                        <Link to="/community/news" className={TopNavstyles.navLink} onClick={handleMenuClick}>
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
                        <Link to="/support" className={TopNavstyles.navLink} onClick={handleMenuClick}>
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
                            onClick={handleMenuClick}
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
