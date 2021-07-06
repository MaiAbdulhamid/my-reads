# MyReads Project

This is the solution of assessment project for Udacity's React Fundamentals course.

## Setup

To get started:

* git clone https://github.com/MaiAbdulhamid/my-reads.git
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting

```bash

├── README.md - This file.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of your app. Contains search, and Dashboard Components.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── Search.js # Contains Search page UI and Functionality.
    ├── Dashboard.js # Contains Header, ListShelves and searchRtn Components.
    ├── Headr.js # Contains Header UI.
    ├── SearchBtn.js # Contains Search Button UI.
    ├── ListShelves.js # Contains BookShelf Component.
    ├── BookShelf.js # Contains Book Component.
    ├── Book.js # Contains Book structue.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Instructions

Every Componet which renders just `UI` Imade it a `Functional Component`, using destructuring I extracted `props` as a function argument `opject`. 

- [App.js](src/App.js):

  * `componentDidMount()` -> Life cycle hook method witch used for get all Books from the provided `BooksAPI.js` file using `getAll()` method.
  * `updateShelf(book, shelf)` -> A method witch used for move Books from one shelf to the other, with the provided `BooksAPI.js` file using `update()` method.
  * Passing `books` state to Search `Component` and `Dashboard` Component.

- [Dashboard.js](src/Dashboard.js):

  * Renders `Header`, `ListShelves` and `searchRtn` Components.
  * Recives `books` and `updateShelf` as a props.

- [ListShelves.js](src/ListShelves.js):

  * Recives `books` and `updateShelf` as a props.
  * filters `books` for each shelf.
  * Renders `BookShelf` Component and passing it's `books`, `title` and `updateShelf`.

- [BookShelf.js](src/BookShelf.js):

  * Recives `books`, `title` and `updateShelf` as a props.
  * mapping through `books` for each shelf.
  * Renders `Book` Component and passing it `book` and `updateShelf`.

- [book.js](src/book.js):

  * Recives `book` and `updateShelf` as a props.
  * Renders `Book` UI and active `updateShelf` method for each book to define it's shelf or to move it from shelf to another.
  
- [Search.js](src/Search.js):

  * Recives `book` and `updateShelf` as a props.
  * Has `query`, `result` and `error` states.
  * `searchBooks` -> A method witch used for search books, with the provided `BooksAPI.js` file using `search()` method. The `result` and `error` states used for store the results.
  * `updateQuery` -> set `query` state to the input value.
  * `clearQuery` -> reset `query` state.
  * `handleSearchInput` -> Handle the process of search by passing the value of the input search to `searchBooks` and `updateQuery`.
  * Renders `Search` UI and it's Functionality.

## Packages: 
- [prop-types](https://www.npmjs.com/package/prop-types) 
- [throttle-debounce](https://www.npmjs.com/package/throttle-debounce).
