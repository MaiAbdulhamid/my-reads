import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './utils/BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }
  state = {
    query: '',
    result: [],
    error: {}
  }
  searchBooks = debounce(300, false, query => {
    if(query.length > 0) {
      BooksAPI.search(query)
      .then(books => {
        if(books.error){
          this.setState({ error: books });
        }else {
          this.setState({ result: books });
        }
      })      
      .catch(error => {
        this.setState({ result: error });
      }) 
    }else {
      this.setState({ result: [] })
    }
  });
  updateQuery = (query) => {
    this.setState({query: query})
  }
  clearQuery = () => {
    this.updateQuery('');
  };
  handleSearchInput = (query) => {
    this.updateQuery(query);
    this.searchBooks(query);
  };

  render(){
    const { query, result, error } = this.state;
    const { books, onChangeShelf } = this.props;

    const searchResult = result.map(book => {
      books.map(b => {
        if(b.id === book.id){
          book.shelf = b.shelf;
        }
        return b;
      });
      return book;
    }).filter(b => (
      b.title.toLowerCase().includes(query.toLowerCase())
    ));

    const searchTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'];
 
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              value={query}
              onChange={(e) => this.handleSearchInput(e.target.value) }
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResult.length > 0 ? searchResult.map((book, index) => (
              <li key={index}>
                <Book book={book} onChangeShelf={onChangeShelf} />
              </li>
            )) : (<li className="no-matched"> <p>{error.error && `There is an Error: ${error.error}`} </p> Please Make Sure That Search Terms is: {searchTerms.join(', ')} </li>)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search