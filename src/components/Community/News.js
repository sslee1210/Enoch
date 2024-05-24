// NewsComponent.js
import React, { useState } from 'react';

// 각 소식 항목을 표시하는 컴포넌트
const NewsItem = ({ title, content }) => (
    <div className="news-item">
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
);

const News = () => {
    const [news, setNews] = useState([]); // 소식 데이터를 위한 상태
    const [title, setTitle] = useState(''); // 새로운 소식의 제목 상태
    const [content, setContent] = useState(''); // 새로운 소식의 내용 상태

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNewsItem = {
            id: news.length + 1, // 간단한 고유 ID 생성
            title,
            content,
        };
        setNews([...news, newNewsItem]); // 상태를 업데이트하여 새로운 소식을 추가
        setTitle(''); // 입력 필드 초기화
        setContent(''); // 입력 필드 초기화
    };

    return (
        <div className="news-container">
            <form onSubmit={handleSubmit} className="news-form">
                <div>
                    <label htmlFor="title">제목:</label>
                    <input type="text" id="title" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                    <label htmlFor="content">내용:</label>
                    <textarea id="content" value={content} onChange={handleContentChange} />
                </div>
                <button type="submit">소식 추가</button>
            </form>
            {news.map((item) => (
                <NewsItem key={item.id} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default News;
