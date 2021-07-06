import React from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

const BookShelf = ({ shelfBooks, title, onChangeShelf } ) => {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map(book => (
            <li key={book.id} >
              <Book book={book} onChangeShelf={onChangeShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  shelfBooks: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default BookShelf