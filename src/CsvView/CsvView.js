import React from 'react';
import csv from 'csvtojson';

import './CsvView.css';

import Table from './Table/Table';
import CsvUpload from './CsvUpload/CsvUpload';
import BookLibrary from '../Services/BookLibrary';

/**
 * A React component that renders both the CsvUpload buttons, and the Table view
 * This component is also in charge of managing the state of the BookLibrary, and ensuring that it gets updated
 * @param {Object} props
 * @param {string|null} selectedGenre
 * @param {string|null} selectedTitle
 * @param {Function} props.updateBooks - A Function to be called whenever the Array of Books gets updated
 */
export default class CsvView extends React.Component {
  constructor(props) {
    super(props);

    this.loadCsv = this.loadCsv.bind(this);
  }

  loadCsv(csvData) {
    BookLibrary.clearBooks();

    csv()
      .fromString(csvData)
      .on('json', (jsonObject) => {
        BookLibrary.addBook(jsonObject.title, jsonObject.author, jsonObject.genre, jsonObject.rating)
      })
      .on('done', () => {
        this.props.updateBooks(BookLibrary.getBooks());
      });
  }

  render() {
    return (
      <div id="csv-view-div">
        <CsvUpload loadCsv={this.loadCsv} />
        <Table books={this.props.books} selectedGenre={this.props.selectedGenre} selectedTitle={this.props.selectedTitle} />
      </div>
    );
  }
} 
