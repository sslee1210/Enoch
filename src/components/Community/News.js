import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import newsData from './newsData.json';
import NewsStyles from './News.module.css';

const News = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const sortedNewsData = [...newsData].sort((a, b) => b.id - a.id); // id 기준으로 내림차순 정렬

    const totalPages = Math.ceil(sortedNewsData.length / itemsPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const currentItems = sortedNewsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className={NewsStyles.news}>
            <div className={NewsStyles.news1}>
                <h1>회사 소식</h1>
                <ul>
                    {currentItems.map((item) => (
                        <li key={item.id}>
                            <Link to={`/community/news/${item.id}`}>
                                {item.title} <span>날짜: {item.date}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={NewsStyles.pagination}>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handleClick(index + 1)}
                            disabled={currentPage === index + 1}
                            style={{
                                margin: '0 5px',
                                padding: '5px 10px',
                                cursor: 'pointer',
                                backgroundColor: currentPage === index + 1 ? '#ddd' : 'white',
                            }}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
