import React from 'react';
import { useParams } from 'react-router-dom';
import newsData from './newsData.json';

const News = () => {
    const { id } = useParams();
    const item = newsData.find((news) => news.id === parseInt(id, 10));

    if (!item) {
        return <div>해당 뉴스를 찾을 수 없습니다.</div>;
    }

    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
        </div>
    );
};

export default News;
