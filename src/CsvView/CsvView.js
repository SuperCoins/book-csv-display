import React from 'react';
import './CsvView.css';
import csv from 'csvtojson';

import Table from './Table/Table';
import CsvUpload from './CsvUpload/CsvUpload';
import BookLibrary from '../Services/BookLibrary';

class CsvView extends React.Component {
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

export default CsvView;
