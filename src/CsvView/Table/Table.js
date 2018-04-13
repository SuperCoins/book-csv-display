import React from 'react';

import './Table.css';

class Table extends React.Component {
  getBookRow(book) {
    let selected = book.genre == this.props.selectedGenre || book.title == this.props.selectedTitle;
    console.log(selected);
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

export default Table;
