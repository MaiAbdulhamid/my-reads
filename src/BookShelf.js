import React from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";


const BookShelf = ({ shelf, books, onChangeShelf } ) => {

  const shelfBooks = books.filter(book => book.shelf === shelf.key)
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map(book => (
            <li key={book.id} >
              <Book book={book} shelf={book.shelf} onChangeShelf={onChangeShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default BookShelf