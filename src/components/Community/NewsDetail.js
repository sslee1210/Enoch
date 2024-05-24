import React from 'react';
import { useParams } from 'react-router-dom';
import newsData from './newsData.json';
import NewsStyles from './News.module.css';

const NewsDetail = () => {
    const { id } = useParams();
    const item = newsData.find((news) => news.id === parseInt(id, 10));

    if (!item) {
        return <div>해당 뉴스를 찾을 수 없습니다.</div>;
    }

    return (
        <div className={NewsStyles.news}>
            <div className={NewsStyles.news1}>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
            </div>
        </div>
    );
};

export default NewsDetail;
