import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';

import './Chart.css';

function render(props) {
  return (
    <div className="chart">
      <BarChart className="svg-chart" width={600} height={400} data={props.books.slice().sort((a, b) => b.rating < a.rating)}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis type="number" domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]}>
          <Label value="Book Rating" angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <Bar dataKey="rating" fill="#8884d8" onClick={data => {
          props.onBookClick(data.title);
        }} />
      </BarChart>
    </div>
  );
}

export default render;