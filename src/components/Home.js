import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Books';
import { fetchBooks } from '../redux/books/booksSlice';

export default function Books() {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div>
        There is an Error:
        {error}
      </div>
    );
  }

  return (
    <div className="bookcard-container">
      {Object.entries(books).map(([itemId, book]) => (
        <Book
          key={itemId}
          genres={book[0].category}
          title={book[0].title}
          author={book[0].author}
          itemId={itemId}
        />
      ))}
      <hr className="hr-line" />
      <AddBook />
    </div>
  );
}
