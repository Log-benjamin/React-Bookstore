import { useDispatch, useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Books';
import { addBook, removeBook } from '../redux/books/booksSlice';

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleAddBook = (title, author) => {
    const newItemId = `item${Math.random().toString(36).substr(2, 9)}`;

    dispatch(addBook({
      item_id: newItemId,
      title,
      author,
      catagory: 'Fiction',
    }));
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div className="bookcard-container">
      {books.map((book) => (
        <Book
          key={book.item_id}
          genres={book.catagory}
          title={book.title}
          author={book.author}
          onRemove={() => handleRemoveBook(book.item_id)}
        />
      ))}
      <hr className="hr-line" />
      <AddBook onAddBook={handleAddBook} />
    </div>
  );
}
