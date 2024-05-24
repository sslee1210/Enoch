import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import newsData from './newsData.json';

const NewsDetail = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(newsData.length / itemsPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const currentItems = newsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="news-list">
            <h1>회사 소식</h1>
            <ul>
                {currentItems.map((item) => (
                    <li key={item.id}>
                        <Link to={`/community/news/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => handleClick(index + 1)} disabled={currentPage === index + 1}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NewsDetail;
