import React from 'react';

import './Table.css';

/**
 * A React Component that renders a table of Books
 * @param {Object} props
 * @param {Book[]} props.books
 * @param {string|null} props.selectedGenre - If given this will select all table rows with books in that genre
 * @param {string|null} props.selectedTitle - If given this will select all table rows for books with that title
 */
export default class Table extends React.Component {
  getBookRow(book) {
    let selected = book.genre == this.props.selectedGenre || book.title == this.props.selectedTitle;
    return (<tr key={book.title} className={selected ? 'table-active' : ''}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.rating}</td>
    </tr>);
  }

  render() {
    return (
      <div id="table-div">
        <table className="table" id="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Genre</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            {this.props.books.map(this.getBookRow.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }
}