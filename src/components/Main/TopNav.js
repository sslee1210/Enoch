import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopNavStyles from './TopNav.module.css';

const TopNav = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={TopNavStyles.nav}
            style={{
                backgroundColor: isHovered ? '#000' : 'white',
                transition: 'background-color 0.5s ease',
            }}
        >
            <Link to="/Enoch" className={`${TopNavStyles.logo} ${isHovered ? TopNavStyles.hoveredLink : ''}`}>
                로고
            </Link>
            <nav>
                <button className={TopNavStyles.hamburger}>
                    <span className={TopNavStyles.bar}></span>
                    <span className={TopNavStyles.bar}></span>
                    <span className={TopNavStyles.bar}></span>
                </button>
                <ul onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <li>
                        <Link to="/about">About</Link>
                        {/* 조건부 스타일링을 적용하여, isHovered 상태에 따라 클래스를 동적으로 변경합니다. */}
                        <ul className={isHovered ? TopNavStyles.subMenu : ''}>
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
                        <ul className={isHovered ? TopNavStyles.subMenu : ''}>
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
                        <ul className={isHovered ? TopNavStyles.subMenu : ''}>
                            <li>
                                <Link to="/support">Download File</Link>
                            </li>
                            <li>
                                <Link to="/guide">사용설명법</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <a
                    href="https://swit2019.cafe24.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={`${TopNavStyles.link} ${isHovered ? TopNavStyles.hoveredLink : ''}`}
                >
                    Shop
                </a>
            </nav>
        </div>
    );
};

export default TopNav;
