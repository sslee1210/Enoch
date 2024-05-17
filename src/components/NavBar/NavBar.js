import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
                <h1>
                    <Link to="/Enoch">로고</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                        <ol>
                            <li>
                                <Link to="/about">회사소개</Link>
                            </li>
                            <li>
                                <Link to="/history">HISTORY</Link>
                            </li>
                            <li>
                                <Link to="/global">해외법인</Link>
                            </li>
                            <li>
                                <Link to="/contact">CONTACT US</Link>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <Link to="/as">A/S</Link>
                        <ol>
                            <li>
                                <Link to="/as">A/S 접수</Link>
                            </li>
                            <li>
                                <Link to="/qna">자주 묻는 질문</Link>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                        <ol>
                            <li>
                                <Link to="/support">Download File</Link>
                            </li>
                            <li>
                                <Link to="/guide">사용 설명법</Link>
                            </li>
                        </ol>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
