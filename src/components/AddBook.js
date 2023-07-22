import React from 'react';

const AddBook = () => (
  <form>
    <h4>ADD NEW BOOK</h4>
    <input className="booktitle-inp" type="text" placeholder="Book Title" required />
    <input className="catagory-inp" type="text" placeholder="Category" required />
    <input className="author-inp" type="text" placeholder="Book Author" required />
    <button className="submit-btn" type="button">ADD BOOK</button>
  </form>
);

export default AddBook;
