import React from 'react';
import './CommentSection.css'; // Import the CSS file for styling

import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

const Comment = ({ user, text, likes, dislikes }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{user}</h5>
      <p className="card-text">{text}</p>
      <hr />
      <ul className="card-text list-inline">
        {/* Like */}
        <li className="list-inline-item">
          <a href="#">
            <ThumbUpAltOutlinedIcon /> {likes}
          </a>
        </li>
        {/* Dislike */}
        <li className="list-inline-item">
          <a href="#">
            <ThumbDownAltOutlinedIcon /> {dislikes}
          </a>
        </li>
        {/* Report */}
        <li className="list-inline-item">
          <a href="#">
            <FlagOutlinedIcon />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

// CommentSection Component
const CommentSection = () => {
  return (
    <div className="container page-width pt-3">
      <h3>Comments</h3>
      <hr />
      {/* Add Comment Section */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Leave a comment</h5>
          <hr />
          <form>
            <div className="form-group">
              <textarea
                rows="3"
                className="form-control bg-light"
                placeholder="Enter your comment here..."
                style={{ resize: 'none' }}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary btn-block">
              Comment
            </button>
          </form>
        </div>
      </div>
      {/* Comments */}
      <Comment
        user="FirstUser"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam recusandae sed dolorem nisi."
        likes={88}
        dislikes={14}
      />
      <Comment
        user="SecondUser"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam recusandae sed dolorem nisi."
        likes={88}
        dislikes={14}
      />
      <Comment
        user="ThirdUser"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam recusandae sed dolorem nisi."
        likes={88}
        dislikes={14}
      />
    </div>
  );
};

export default CommentSection;
