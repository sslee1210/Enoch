import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
     <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
            <ol>
            <li><Link to="/about">회사소개</Link></li>
              <li><Link to="/">HISTORY</Link></li>
              <li><Link to="/">해외법인</Link></li>
              <li><Link to="/">CONTACT US</Link></li>
            </ol>
        </li>
        <li>
          <Link to="/">A/S</Link>
            <ol>
              <li><Link to="/">A/S 접수</Link></li>
              <li><Link to="/">자주 묻는 질문</Link></li>
            </ol>
        </li>
        <li>
          <Link to="/">Support</Link>
            <ol>
              <li><Link to="/">Download File</Link></li>
              <li><Link to="/">사용 설명법</Link></li>
            </ol>
          </li>
      </ul>
     </nav>
    </div>
  );
};

export default NavBar;