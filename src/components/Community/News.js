import React, { useState, useEffect } from 'react';
import NewsStyles from './News.module.css';
function News() {
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
            setPosts([
                ...posts,
                { id: posts.length + 1, name: userName, content: newPost, password: userPassword, comments: [] },
            ]);
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
        if (postIndex >= 0 && posts[postIndex].password === postPassword) {
            const updatedPosts = [...posts];
            updatedPosts[postIndex] = { ...updatedPosts[postIndex], content: editContent };
            setPosts(updatedPosts);
            setEditingId(null);
            setEditContent('');
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditContent('');
    };

    const addComment = (postId, commentName, commentPassword, commentText) => {
        setPosts(
            posts.map((post) =>
                post.id === postId
                    ? {
                          ...post,
                          comments: [
                              ...post.comments,
                              { name: commentName, password: commentPassword, text: commentText },
                          ],
                      }
                    : post
            )
        );
    };

    const deleteComment = (postId, commentId, commentPassword) => {
        const post = posts.find((post) => post.id === postId);
        if (post && post.password === commentPassword) {
            setPosts(
                posts.map((post) =>
                    post.id === postId
                        ? { ...post, comments: post.comments.filter((comment) => comment.id !== commentId) }
                        : post
                )
            );
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    };

    const editComment = (postId, commentId, newName, newPassword, newText, commentPassword) => {
        const post = posts.find((post) => post.id === postId);
        if (post && post.password === commentPassword) {
            setPosts(
                posts.map((post) =>
                    post.id === postId
                        ? {
                              ...post,
                              comments: post.comments.map((comment) =>
                                  comment.id === commentId
                                      ? { ...comment, name: newName, password: newPassword, text: newText }
                                      : comment
                              ),
                          }
                        : post
                )
            );
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    };

    return (
        <div className={NewsStyles.news}>
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
                <button onClick={addPost}>등록</button>
            </div>
            <ul>
                {posts?.map((post) => (
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
                        <div>
                            <h3>Comments</h3>
                            {post.comments?.map((comment, index) => (
                                <p key={index}>
                                    {comment.text} ({comment.name}):{' '}
                                    <button onClick={() => deleteComment(post.id, comment.id, comment.password)}>
                                        삭제
                                    </button>
                                    <button
                                        onClick={() =>
                                            editComment(
                                                post.id,
                                                comment.id,
                                                comment.name,
                                                comment.password,
                                                comment.text,
                                                comment.password
                                            )
                                        }
                                    >
                                        수정
                                    </button>
                                </p>
                            ))}
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const commentNameInput = document.getElementById(`comment-name-input-${post.id}`);
                                    const commentPasswordInput = document.getElementById(
                                        `comment-password-input-${post.id}`
                                    );
                                    const commentTextInput = document.getElementById(`comment-text-input-${post.id}`);
                                    addComment(
                                        post.id,
                                        commentNameInput.value,
                                        commentPasswordInput.value,
                                        commentTextInput.value
                                    );
                                    commentNameInput.value = '';
                                    commentPasswordInput.value = '';
                                    commentTextInput.value = '';
                                }}
                            >
                                <input
                                    id={`comment-name-input-${post.id}`}
                                    type="text"
                                    placeholder="이름을 입력하세요"
                                />
                                <input
                                    id={`comment-password-input-${post.id}`}
                                    type="password"
                                    placeholder="비밀번호를 입력하세요"
                                />
                                <textarea
                                    id={`comment-text-input-${post.id}`}
                                    placeholder="댓글 내용을 입력하세요"
                                ></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                <p>콜센터 안내</p>
                <p>02-2268-8770</p>
                <p>
                    통화량이 많을때는 Q&A를 이용해주세요평일 오전 09:30 ~ 오후 5:00 / 점심시간 오후 11:30 ~ 오후 1:00토
                    / 일 /공휴일 휴무
                </p>
            </div>
        </div>
    );
}

export default News;
