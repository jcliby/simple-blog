import React from 'react';

import './PostPreviewList.css';
import PostPreview from './PostPreview';

const PostPreviewList = ({ posts }) => {
  return (
    <div id="list-container">
      <h1 id="list-title">Recent Posts</h1>
      {posts.map((post, index) => {
        return (
          <PostPreview id={index} title={post.title} content={post.content} />
        );
      })}
    </div>
  );
};

export default PostPreviewList;
