import React from "react";
import "../styles/HomePage.css";

const PostCard = ({ author, time, content }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src="https://i.pravatar.cc/50" alt="avatar" className="avatar" />
        <div>
          <p className="author">{author}</p>
          <p className="time">{time}</p>
        </div>
      </div>
      <p className="content">{content}</p>
      <div className="post-actions">
        <button>👍</button>
        <button>💬</button>
        <button>↗️</button>
      </div>
    </div>
  );
};

export default PostCard;
