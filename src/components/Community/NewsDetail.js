import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import newsData from './newsData.json';
import NewsStyles from './News.module.css';

const NewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const item = newsData.find((news) => news.id === parseInt(id, 10));

    if (!item) {
        return <div>뉴스 항목을 찾을 수 없습니다.</div>;
    }

    const itemIndex = newsData.findIndex((news) => news.id === parseInt(id, 10));
    const prevItem = itemIndex > 0 ? newsData[itemIndex - 1] : null;
    const nextItem = itemIndex < newsData.length - 1 ? newsData[itemIndex + 1] : null;

    const createMarkup = (html) => {
        return { __html: html };
    };

    return (
        <div className={NewsStyles.news}>
            <div className={NewsStyles.news1}>
                <h1>
                    {item.title} <span>({item.date})</span>
                </h1>
                <p dangerouslySetInnerHTML={createMarkup(item.content)}></p>

                <div className={NewsStyles.navigation}>
                    {prevItem && (
                        <p className={NewsStyles.prev}>
                            <Link to={`/community/news/${prevItem.id}`}>이전글: {prevItem.title}</Link>
                        </p>
                    )}
                    {nextItem && (
                        <p className={NewsStyles.next}>
                            <Link to={`/community/news/${nextItem.id}`}>다음글: {nextItem.title}</Link>
                        </p>
                    )}
                </div>
                <button onClick={() => navigate('/community/news')} className={NewsStyles.backButton}>
                    뒤로가기
                </button>
            </div>
        </div>
    );
};

export default NewsDetail;
