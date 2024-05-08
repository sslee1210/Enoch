import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    // 각 메뉴 항목에 대한 상태를 개별적으로 관리합니다.
    const [isOpenAbout, setIsOpenAbout] = useState(false);
    const [isOpenAS, setIsOpenAS] = useState(false);
    const [isOpenSupport, setIsOpenSupport] = useState(false);

    return (
        <nav className={styles.navbar}>
            <h1>Logo</h1>
            <ul className={styles.nav_links}>
                <li onClick={() => setIsOpenAbout(!isOpenAbout)} className={styles.dropdownButton}>
                    About
                    {isOpenAbout && (
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <Link to="/intro">회사 소개</Link>
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
                        </ul>
                    )}
                </li>
                <li onClick={() => setIsOpenAS(!isOpenAS)} className={styles.dropdownButton}>
                    A/S
                    {isOpenAS && (
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <Link to="/as">A/S 접수</Link>
                            </li>
                            <li>
                                <Link to="/qs">자주 묻는 질문</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li onClick={() => setIsOpenSupport(!isOpenSupport)} className={styles.dropdownButton}>
                    Support
                    {isOpenSupport && (
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <Link to="/Download">Download File</Link>
                            </li>
                            <li>
                                <Link to="/use">사용설명법</Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
            <a href="/">Shop</a>
        </nav>
    );
};

export default Nav;
