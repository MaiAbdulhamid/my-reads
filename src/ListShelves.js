import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from "./BookShelf";

const ListShelves = ({ books, onChangeShelf }) => {

  const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
  const wantToRead = books.filter(book => book.shelf === 'wantToRead');
  const read = books.filter(book => book.shelf === 'read')

  return(
    <div className="list-books-content"> 
      <BookShelf shelfBooks={currentlyReading} title='Currently Reading' onChangeShelf={onChangeShelf} />
      <BookShelf shelfBooks={wantToRead} title='Want To Read' onChangeShelf={onChangeShelf} />
      <BookShelf shelfBooks={read} title='Read' onChangeShelf={onChangeShelf} />
    </div>
  );
}

ListShelves.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default ListShelves