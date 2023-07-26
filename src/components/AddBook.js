import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [catagory, setCatagory] = useState('');

  const handleAddBook = () => {
    const newItemId = `item${Math.random().toString(30).substr(2, 7)}`;

    dispatch(addBook({
      item_id: newItemId,
      title,
      author,
      catagory,
    }));

    setTitle('');
    setAuthor('');
    setCatagory('');
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
        className="catagory-inp"
        type="text"
        value={catagory}
        onChange={(e) => setCatagory(e.target.value)}
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
