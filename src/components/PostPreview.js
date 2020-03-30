import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import parse from 'html-react-parser';

import '../styles/PostPreview.css';

const PostPreview = ({ id, title, content, onClick }) => {
  return (
    <div className="post-preview">
      <h1 className="preview-title">{title}</h1>
      <div className="preview-content">{renderString(content)}</div>
      <Link
        className="preview-link"
        to={`/post/${id}`}
        onClick={() => onClick(id)}
      >
        Link to Post
      </Link>
    </div>
  );
};

const renderString = text => {
  if (text && text.length > 450) {
    return parse(text.substring(0, 450));
  }
  return 'No preview available.';
};

export default withRouter(PostPreview);
