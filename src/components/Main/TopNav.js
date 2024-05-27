import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopNavStyles from './TopNav.module.css';

const TopNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState({});

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleSubMenu = (index) => {
        setIsSubMenuOpen((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className={TopNavStyles.nav}>
            <Link to="/" className={TopNavStyles.logo}>
                로고
            </Link>
            <div className={TopNavStyles.hamburger} onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={isNavOpen ? `${TopNavStyles.nav} ${TopNavStyles.active}` : TopNavStyles.nav}>
                <ul className={isNavOpen ? `${TopNavStyles.active}` : ''}>
                    <li>
                        <Link to="/about/intro" onClick={() => toggleSubMenu(0)}>
                            About
                        </Link>
                        <ul className={`${TopNavStyles.subMenu} ${isSubMenuOpen[0] ? `${TopNavStyles.active}` : ''}`}>
                            <li>
                                <Link to="/about/intro">회사 소개</Link>
                            </li>
                            <li>
                                <Link to="/about/history">HISTORY</Link>
                            </li>
                            <li>
                                <Link to="/about/global">해외 법인</Link>
                            </li>
                            <li>
                                <Link to="/about/contact">CONTACT US</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/community/news">community</Link>
                        <ul className={TopNavStyles.subMenu}>
                            <li>
                                <Link to="community/news">회사 소식</Link>
                            </li>
                            <li>
                                <Link to="/community/qna">자주 묻는 질문</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                        <ul className={TopNavStyles.subMenu}>
                            <li>
                                <Link to="/support">Download File</Link>
                            </li>
                            <li>
                                <Link to="/support/guide">사용설명법</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a
                            href="https://swit2019.cafe24.com/"
                            target="_blank"
                            rel="noreferrer"
                            className={TopNavStyles.link}
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
