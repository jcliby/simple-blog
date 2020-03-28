import React from 'react';

import './PostPreviewList.css';
import PostPreview from './PostPreview';

const PostPreviewList = ({ posts }) => {
  return (
    <div id="list-container" className="container">
      <h1 className="section-title">Recent Posts</h1>
      {posts.map(post => {
        return (
          <PostPreview
            key={post.id}
            title={post.title}
            content={post.content}
          />
        );
      })}
    </div>
  );
};

export default PostPreviewList;
