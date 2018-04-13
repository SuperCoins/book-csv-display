import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

import './Chart.css';

// An Array of colours to use for the pie slices
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

/**
 * Given an array of books this outputs an array containing objects that detail each genre, and the amount of times it was present
 * @param {Book[]} books 
 * @param {string} books.genre
 * @returns {Object[]} genres - The 
 * @returns {string} genres[].name - The name of the genre
 * @returns {string} genres[].value - The amount of times this genre appeared in books
 */
function generateGenreArray(books) {
  const genres = books.map(book => book.genre);
  const genreCount = genres.reduce((bookGenres, genre) => {
    if (genre in bookGenres) bookGenres[genre]++;
    else bookGenres[genre] = 1;
    return bookGenres;
  }, {});
  return Object.keys(genreCount).map(genre => {
    return { name: genre, value: genreCount[genre] }
  });
}

/**
 * Render a piechart from an array of books
 * @param {Object} props 
 * @param {Book[]} props.books
 * @param {Function} props.onGenreClick - A function to call whenever a genre pieslice is clicked
 */
export default function render(props) {
  const genreArray = generateGenreArray(props.books);
  return (
    <div className="chart">
      <PieChart className="svg-chart" width={600} height={400}>
        <Pie
          data={genreArray}
          cx={300}
          cy={200}
          fill="#8884d8"
          dataKey="value"
          onClick={data => {
            props.onGenreClick(data.name);
          }}>
          {genreArray.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}