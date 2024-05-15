import React, { useState, useEffect } from 'react';

function As() {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem('posts');

        return savedPosts ? JSON.parse(savedPosts) : [];
    });
    const [editingId, setEditingId] = useState(null);
    const [editContent, setEditContent] = useState('');

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    const addPost = () => {
        if (newPost && userPassword && userName) {
            setPosts([...posts, { id: posts.length + 1, name: userName, content: newPost, password: userPassword }]);
            setUserName('');
            setNewPost('');
            setUserPassword('');
        } else {
            alert('이름, 게시물 내용, 비밀번호를 모두 입력해주세요.');
        }
    };

    const deletePost = (id) => {
        const postPassword = prompt('게시물을 삭제하려면 비밀번호를 입력해주세요.');
        const post = posts.find((post) => post.id === id);
        if (post && post.password === postPassword) {
            setPosts(posts.filter((post) => post.id !== id));
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    };

    const activateEditMode = (id) => {
        const post = posts.find((post) => post.id === id);
        setEditingId(id);
        setEditContent(post.content);
    };

    const applyEdit = (id) => {
        const postPassword = prompt('게시물을 수정하려면 비밀번호를 입력해주세요.');
        const postIndex = posts.findIndex((post) => post.id === id);
        if (postIndex > -1 && posts[postIndex].password === postPassword) {
            const updatedPosts = [...posts];
            updatedPosts[postIndex] = { ...updatedPosts[postIndex], content: editContent };
            setPosts(updatedPosts);
            setEditingId(null);
            setEditContent('');
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    };

    // 게시물 수정 취소 함수
    const cancelEdit = () => {
        setEditingId(null);
        setEditContent('');
    };

    return (
        <div>
            <p>이름:</p>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="이름을 입력하세요"
            />
            <p>비밀번호:</p>
            <input
                type="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
            />
            <p>내용</p>
            <input type="text" value={newPost} onChange={(e) => setNewPost(e.target.value)} />
            <button onClick={addPost}>게시물 추가</button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.name}:{' '}
                        {editingId === post.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editContent}
                                    onChange={(e) => setEditContent(e.target.value)}
                                />
                                <button onClick={() => applyEdit(post.id)}>적용</button>
                                <button onClick={cancelEdit}>취소</button>
                            </>
                        ) : (
                            <>{post.content}</>
                        )}
                        {editingId !== post.id && (
                            <>
                                <button onClick={() => activateEditMode(post.id)}>수정</button>
                                <button onClick={() => deletePost(post.id)}>삭제</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default As;
