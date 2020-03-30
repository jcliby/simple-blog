import React from 'react';

import '../styles/PostPreviewList.css';
import PostPreview from './PostPreview';

const PostPreviewList = ({ posts, onClick }) => {
  return (
    <div id="list-container" className="container">
      <h1 className="section-title">Recent Posts</h1>
      {posts.map(post => {
        return (
          <PostPreview
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default PostPreviewList;
