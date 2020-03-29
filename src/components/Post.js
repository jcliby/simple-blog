import React from 'react';
import parse from 'html-react-parser';

import './Post.css';
import PostImage from '../images/postImage.svg';

const Post = ({ post }) => {
  const formatDate = () => {
    return new Date(post.date).toDateString();
  };

  return (
    <div id="post-container" className="container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">{formatDate()}</p>
      <img
        src={PostImage}
        id="post-image"
        alt="Little doodle that has nothing to with post content"
      />
      <div className="post-content">{parse(post.content)}</div>
    </div>
  );
};

export default Post;
