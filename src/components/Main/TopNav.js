import React from 'react';
import { Link } from 'react-router-dom';
import TopNavStyles from './TopNav.module.css';

const TopNav = () => {
    return (
        <div className={TopNavStyles.nav}>
            <Link to="/Enoch" className={TopNavStyles.logo}>
                로고
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                        <ul className={TopNavStyles.subMenu}>
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
                        <Link to="/community">community</Link>
                        <ul className={TopNavStyles.subMenu}>
                            <li>
                                <Link to="community/news">소식</Link>
                            </li>
                            <li>
                                <Link to="/qna">자주 묻는 질문</Link>
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
                                <Link to="/guide">사용설명법</Link>
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
