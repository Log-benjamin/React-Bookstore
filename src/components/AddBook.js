import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addBookAsync } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    const newItemId = `item${Math.random().toString(30).substr(2, 7)}`;

    if (title && author) {
      dispatch(addBookAsync({
        item_id: newItemId,
        title,
        author,
        category,
      }));

      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };
  return (
    <form>
      <h4>ADD NEW BOOK</h4>
      <input
        className="booktitle-inp"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book Title"
        required
      />
      <input
        className="category-inp"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        className="author-inp"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Book Author"
        required
      />
      <Button label="ADD BOOK" classN="submit-btn" onClick={handleAddBook} />
    </form>
  );
};

export default AddBook;
