import React from 'react';
import { Link } from 'react-router-dom';
import TopNavStyles from './TopNav.module.css';

const TopNav = () => {
    return (
        <div className={TopNavStyles.nav}>
            <h1>
                <Link to="/Enoch">로고</Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                        <ul>
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
                        <ul>
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
                        <ul>
                            <li>
                                <Link to="/support">Download File</Link>
                            </li>
                            <li>
                                <Link to="/guide">사용설명법</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <a href="https://swit2019.cafe24.com/" target="_blank" rel="noreferrer">
                Shop
            </a>
        </div>
    );
};

export default TopNav;
