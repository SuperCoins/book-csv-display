import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

import './Chart.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

function render(props) {
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

export default render;