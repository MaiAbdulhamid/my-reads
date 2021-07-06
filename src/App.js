import React from 'react'
import { Route } from "react-router-dom";
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import Dashboard from "./Dashboard";
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState({ books })
      console.log(books);
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(currentState => ({
        books: currentState.books
          .filter(b => b.id !== book.id)
          .concat([book])
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Dashboard 
            books={this.state.books} 
            onChangeShelf={this.updateShelf}  
          />
        )} />

        <Route exact path="/search" render={() => (
          <Search 
            books={this.state.books} 
            onChangeShelf={this.updateShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
