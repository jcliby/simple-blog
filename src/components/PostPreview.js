import React from 'react';
import parse from 'html-react-parser';

import './PostPreview.css';

const PostPreview = ({ title, content }) => {
  return (
    <div className="post-preview">
      <h1 className="preview-title">{title}</h1>
      <div className="preview-content">{renderString(content)}</div>
      <p className="preview-link">Link to Post</p>
    </div>
  );
};

const renderString = text => {
  if (text && text.length > 450) {
    return parse(text.substring(0, 450));
  }
  return 'No preview available.';
};

export default PostPreview;
