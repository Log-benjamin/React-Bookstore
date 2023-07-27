import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';
import Button from './Button';

const Book = ({
  genres, title, author, itemId,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBookAsync(itemId));
  };
  return (
    <div className="Book-Card">
      <div className="title-section">
        <p className="genres">{genres}</p>
        <h3 className="title">{title}</h3>
        <h5 className="author">{author}</h5>
        <div className="comRemEdit">
          <Button classN="comment-btn" label="Comments" />
          <span className="up-bar">|</span>
          <Button classN="remove-btn" label="Remove" onClick={handleRemoveBook} />
          <span className="up-bar">|</span>
          <Button classN="edit-btn" label="Edit" />
        </div>
      </div>

      <span className="up-bar-two">|</span>

      <div className="stat-section">
        <div className="circle-container">
          <div className="circle">
            <div className="item layer-1">
              <div className="fill" />
            </div>
            <div className="item layer-2">
              <div className="fill" />
            </div>
            <div className="inside-content" />
          </div>
        </div>
        <div className="percent-complete">
          <span className="percent">50%</span>
          <span className="complete">Completed</span>
        </div>
      </div>

      <span className="up-bar-two">|</span>

      <div className="update-section">
        <span className="current-chapter">CURRENT CHAPTER</span>
        <span className="current-lesson">Chapter _ </span>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  genres: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
