// 상단에 아이콘을 가져오는 코드 추가
import { MdArrowBack } from 'react-icons/md';
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
                <button onClick={() => navigate('/community/news')} className={NewsStyles.backButton}>
                    <MdArrowBack className={NewsStyles.icon} />
                </button>
                <div className={NewsStyles.text}>
                    <h1>{item.title}</h1>
                    <p dangerouslySetInnerHTML={createMarkup(item.content)}></p>
                </div>
                <div className={NewsStyles.navigation}>
                    <p style={{ marginTop: '0.5vw' }}>다른 글</p>
                    <div className={NewsStyles.but}>
                        {nextItem && (
                            <p className={NewsStyles.next}>
                                <Link to={`/community/news/${nextItem.id}`}>
                                    {nextItem.title} <span>날짜: {item.date}</span>
                                </Link>
                            </p>
                        )}
                        {prevItem && (
                            <p className={NewsStyles.prev}>
                                <Link to={`/community/news/${prevItem.id}`}>
                                    {prevItem.title} <span>날짜: {item.date}</span>
                                </Link>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
