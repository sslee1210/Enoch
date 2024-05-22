import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopNavStyles from './TopNav.module.css';

const TopNav = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLinkHovered, setIsLinkHovered] = useState(false);
    const [isShopHovered, setIsShopHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleLinkMouseEnter = () => {
        setIsLinkHovered(true);
    };

    const handleLinkMouseLeave = () => {
        setIsLinkHovered(false);
    };

    const handleShopMouseEnter = () => {
        setIsShopHovered(true);
    };

    const handleShopMouseLeave = () => {
        setIsShopHovered(false);
    };

    return (
        <div
            className={TopNavStyles.nav}
            style={{
                backgroundColor: isHovered || isLinkHovered || isShopHovered ? '#263238' : 'white',
                transition: 'background-color 0.5s ease',
            }}
        >
            <Link
                to="/Enoch"
                className={`${TopNavStyles.logo} ${
                    isHovered || isLinkHovered || isShopHovered ? TopNavStyles.hoveredLink : ''
                }`}
                onMouseEnter={handleLinkMouseEnter}
                onMouseLeave={handleLinkMouseLeave}
            >
                로고
            </Link>
            <nav>
                <button className={TopNavStyles.hamburger}>
                    <span className={TopNavStyles.bar}></span>
                    <span className={TopNavStyles.bar}></span>
                    <span className={TopNavStyles.bar}></span>
                </button>
                <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <li>
                        <Link to="/about">About</Link>
                        <ul
                            className={isHovered ? TopNavStyles.subMenu : ''}
                            style={{
                                backgroundColor: isHovered || isLinkHovered || isShopHovered ? '#263238' : 'white',
                                transition: 'background-color 0.5s ease',
                            }}
                        >
                            <li>
                                <Link to="/about">회사 소개</Link>
                            </li>
                            <li>
                                <Link to="/history">HISTORY</Link>
                            </li>
                            <li>
                                <Link to="/global">해외 법인</Link>
                            </li>
                            <li>
                                <Link to="/contact">CONTACT US</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/as">A/S</Link>
                        <ul
                            className={isHovered ? TopNavStyles.subMenu : ''}
                            style={{
                                backgroundColor: isHovered || isLinkHovered || isShopHovered ? '#263238' : 'white',
                                transition: 'background-color 0.5s ease',
                            }}
                        >
                            <li>
                                <Link to="/as">A/S 접수</Link>
                            </li>
                            <li>
                                <Link to="/qna">자주 묻는 질문</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                        <ul
                            className={isHovered ? TopNavStyles.subMenu : ''}
                            style={{
                                backgroundColor: isHovered || isLinkHovered || isShopHovered ? '#263238' : 'white',
                                transition: 'background-color 0.5s ease',
                            }}
                        >
                            <li>
                                <Link to="/support">Download File</Link>
                            </li>
                            <li>
                                <Link to="/guide">사용설명법</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a
                            href="https://swit2019.cafe24.com/"
                            target="_blank"
                            rel="noreferrer"
                            className={`${TopNavStyles.link} ${
                                isHovered || isLinkHovered || isShopHovered ? TopNavStyles.hoveredLink : ''
                            }`}
                            onMouseEnter={handleShopMouseEnter}
                            onMouseLeave={handleShopMouseLeave}
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
