import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import ListShelves from "./ListShelves";
import SearchBtn from './SearchBtn';

const Dashboard = ({ books, onChangeShelf }) => {
    return(
      <div className="list-books" >
        <Header />
        <ListShelves books={books} onChangeShelf={onChangeShelf} />
        <SearchBtn />
      </div>
    );
}

Dashboard.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default Dashboard