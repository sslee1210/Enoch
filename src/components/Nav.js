import React from 'react';
import { Link } from 'react-router-dom';
import NavStyles from './Nav.module.css';

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        {/* 여기서는 `Link` 컴포넌트의 `to` prop을 사용하여 경로를 지정합니다. */}
                        <Link to="/about">About</Link>
                        <ul>
                            <li>
                                <Link to="/about/company">회사 소개</Link>
                            </li>
                            <li>
                                <Link to="/about/history">HISTORY</Link>
                            </li>
                            <li>
                                <Link to="/about/international">해외 법인</Link>
                            </li>
                            <li>
                                <Link to="/about/contact">CONTACT US</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/service">A/S</Link>
                        <ul>
                            <li>
                                <Link to="/service/registration">A/S 접수</Link>
                            </li>
                            <li>
                                <Link to="/service/faq">자주 묻는 질문</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                        <ul>
                            <li>
                                <Link to="/support/downloads">Download File</Link>
                            </li>
                            <li>
                                <Link to="/support/manuals">사용설명법</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
