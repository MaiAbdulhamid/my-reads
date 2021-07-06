## MyReads Project

- MyReads is an app that allows to place books in one of three categories:

  1. Currently Reading
  2. Want to Read
  3. Read

- Provides the ability to search for specific books.
- Books Can be Moved between categories. 

## Setup

To get started:

* `$ git clone https://github.com/MaiAbdulhamid/my-reads.git`
* `$ npm install` -> install all project dependencies with.
* `$ npm start` -> start the development server with.

## Instructions

- `$ npm start` to run the project

## Description

Every Component which renders just `UI` I made it a `Functional Component`, using destructuring I extracted `props` as a function argument `object`. 

- [App.js](src/App.js):

  * `componentDidMount()` -> Life cycle hook method witch used for get all Books from the provided `BooksAPI.js` file using `getAll()` method.
  * `updateShelf(book, shelf)` -> A method witch used for move Books from one shelf to the other, with the provided `BooksAPI.js` file using `update()` method.
  * Passing `books` state to Search `Component` and `Dashboard` Component.

- [Dashboard.js](src/Dashboard.js):

  * Renders `Header`, `ListShelves` and `searchRtn` Components.
  * Receives `books` and `updateShelf` as a props.

- [ListShelves.js](src/ListShelves.js):

  * Receives `books` and `updateShelf` as a props.
  * Renders `BookShelf` Component and passing it's `books`, `shelf` and `updateShelf`.

- [BookShelf.js](src/BookShelf.js):

  * Receives `books`, `shelf` and `updateShelf` as a props.
  * Mapping through `books` for each shelf.
  * Renders `Book` Component and passing it `book` and `updateShelf`.

- [Book.js](src/Book.js):

  * Receives `book`, `shelf` and `updateShelf` as a props.
  * Renders `Book` UI and active `updateShelf` method for each book to define it's shelf or to move it from shelf to another.
  
- [Search.js](src/Search.js):

  * Receives `book` and `updateShelf` as a props.
  * Has `query`, `result` and `error` states.
  * `searchBooks` -> A method witch used for search books, with the provided `BooksAPI.js` file using `search()` method. The `result` and `error` states used for store the results.
  * `updateQuery` -> set `query` state to the input value.
  * `clearQuery` -> reset `query` state.
  * `handleSearchInput` -> Handle the process of search by passing the value of the input search to `searchBooks` and `updateQuery`.
  * Renders `Search` UI and it's Functionality.

## Packages:

- [prop-types](https://www.npmjs.com/package/prop-types) 
- [throttle-debounce](https://www.npmjs.com/package/throttle-debounce).
