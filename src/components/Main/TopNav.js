import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopNavstyles from './TopNav.module.css';
import { useTranslation } from 'react-i18next';

const TopNav = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isEnglish, setIsEnglish] = useState(localStorage.getItem('lang') === 'english');
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const navListRef = useRef(null);
    const hamburgerRef = useRef(null);
    const languageMenuRef = useRef(null);

    const toggleButton = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = (event) => {
        if (event.target.tagName === 'A') {
            setIsOpen(false); // 메뉴 항목 클릭 시 메뉴 닫기
        }
    };

    const changeLanguage = (lang) => {
        if (lang === 'en') {
            i18n.changeLanguage('en');
            setIsEnglish(true);
        } else {
            i18n.changeLanguage('ko');
            setIsEnglish(false);
        }
        localStorage.setItem('lang', lang);
        setIsLanguageMenuOpen(false);
    };

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        if (lang === 'english') {
            i18n.changeLanguage('en');
            setIsEnglish(true);
        } else {
            i18n.changeLanguage('ko');
            setIsEnglish(false);
        }
    }, [i18n]);

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
                <div className={TopNavstyles.languageMenu} ref={languageMenuRef}>
                    <button onClick={toggleLanguageMenu} className={TopNavstyles.languageButton}>
                        Language
                    </button>
                    {isLanguageMenuOpen && (
                        <ul className={TopNavstyles.languageOptions}>
                            <li onClick={() => changeLanguage('en')}>English</li>
                            <li onClick={() => changeLanguage('ko')}>한국어</li>
                        </ul>
                    )}
                </div>
                <ul className={TopNavstyles.navItems}>
                    <li className={TopNavstyles.navItem}>
                        <Link to="/about/intro" className={TopNavstyles.navLink}>
                            About
                        </Link>
                        <ul className={TopNavstyles.subMenu}>
                            <li className={TopNavstyles.subMenuItem}>
                                <Link to="/about/intro" className={TopNavstyles.subMenuLink}>
                                    {t('회사 소개')}
                                </Link>
                            </li>
                            <li className={TopNavstyles.subMenuItem}>
                                <Link to="/about/history" className={TopNavstyles.subMenuLink}>
                                    HISTORY
                                </Link>
                            </li>
                            <li className={TopNavstyles.subMenuItem}>
                                <Link to="/about/global" className={TopNavstyles.subMenuLink}>
                                    {t('해외 법인')}
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
                        <Link to="/support" className={TopNavstyles.navLink}>
                            Support
                        </Link>
                        <ul className={TopNavstyles.subMenu}>
                            <li className={TopNavstyles.subMenuItem}>
                                <Link to="/support" className={TopNavstyles.subMenuLink}>
                                    {t('사용설명서')}
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
