import React, { Component } from 'react';
import './App.css';

import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';
import CsvView from './CsvView/CsvView';

/**
 * The main component of this application
 */
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      selectedTitle: null,
      selectedGenre: null,
    }

    this.updateBooks = this.updateBooks.bind(this);
    this.onBookClick = this.onBookClick.bind(this);
    this.onGenreClick = this.onGenreClick.bind(this);
  }

  updateBooks(newBooks) {
    this.setState({ books: newBooks });
  }

  onBookClick(bookTitle) {
    this.setState({
      selectedTitle: bookTitle,
      selectedGenre: null,
    });
  }

  onGenreClick(bookGenre) {
    this.setState({
      selectedTitle: null,
      selectedGenre: bookGenre,
    });
  }

  render() {
    return (
      <div className="App">
        <CsvView books={this.state.books} updateBooks={this.updateBooks} selectedTitle={this.state.selectedTitle} selectedGenre={this.state.selectedGenre} />
        <div id="charts">
          <BarChart books={this.state.books} onBookClick={this.onBookClick} />
          <PieChart books={this.state.books} onGenreClick={this.onGenreClick} />
        </div>
      </div>
    );
  }
}
