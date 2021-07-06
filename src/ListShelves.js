import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from "./BookShelf";

const ListShelves = ({ books, onChangeShelf }) => {

  const bookshelves = [
    { key: 'currentlyReading', title: 'Currently Reading' },
    { key: 'wantToRead', title: 'Want to Read' },
    { key: 'read', title: 'Read' },
  ];

  return(
    <div className="list-books-content"> 
      {bookshelves.map(shelf => (
        <BookShelf key={shelf.key} shelf={shelf} books={books} onChangeShelf={onChangeShelf} />
      ))}
    </div>
  );
}

ListShelves.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default ListShelves