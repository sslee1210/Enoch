import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    // 드롭다운 상태 관리를 위한 useState
    // 각 메뉴의 드롭다운 상태를 false로 초기화합니다.
    const [dropdownOpen, setDropdownOpen] = useState({
        about: false,
        as: false,
        support: false,
    });

    // 메뉴 토글 함수
    const toggleDropdown = (menu) => {
        setDropdownOpen((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    // 메뉴 아이템 정의
    const menuItems = {
        about: [
            { path: '/intro', label: '회사 소개' },
            { path: '/history', label: 'HISTORY' },
            { path: '/global', label: '해외법인' },
            { path: '/contact', label: 'CONTACT US' },
        ],
        as: [
            { path: '/as', label: 'A/S 접수' },
            { path: '/qs', label: '자주 묻는 질문' },
        ],
        support: [
            { path: '/Download', label: 'Download File' },
            { path: '/use', label: '사용설명법' },
        ],
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoAndMenus}>
                <h1>Logo</h1>
                <ul className={styles.nav_links}>
                    {Object.entries(menuItems).map(([menuKey, items]) => (
                        <li key={menuKey} onClick={() => toggleDropdown(menuKey)} className={styles.dropdownButton}>
                            {menuKey.charAt(0).toUpperCase() + menuKey.slice(1)}
                            {dropdownOpen[menuKey] && (
                                <ul className={styles.dropdownMenu}>
                                    {items.map((item) => (
                                        <li key={item.path}>
                                            <Link to={item.path}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <a
                href="https://swit2019.cafe24.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shopLink}
            >
                Shop
            </a>
        </nav>
    );
};

export default Nav;
