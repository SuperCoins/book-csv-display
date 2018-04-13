import React from 'react';
import './CsvUpload.css';

var csvData1 = 'title,author,genre,rating\nThe Way of Kings,Brandon Sanderson,Fantasy,5\nThe Final Empire,Brandon Sanderson,Fantasy,4\nNeuromancer,William Gibson,Science Fiction,3';
var csvData2 = 'title,author,genre,rating\nThe Way of Kings,Brandon Sanderson,Fantasy,5\nThe Final Empire,Brandon Sanderson,Fantasy,4\nNeuromancer,William Gibson,Science Fiction,3,HTML and CSS: Design and Build Websites,Jon Duckett,Programming,4\nDesign Patterns, Erich Gamma, Programming, 4\nThe Pragmatic Programmer, Andy Hunt & Dave Thomas, Programming, 5';

function render(props) {
  return (
    <div id="csv-file-buttons">
      <label id="csv-upload-button" className="btn btn-primary" htmlFor="csv-upload">
        Upload Csv
        <input id="csv-upload" type="file" hidden onChange={(e) => {
          var reader = new FileReader();
          reader.readAsText(e.target.files[0]);
          reader.onload = function () {
            props.loadCsv(reader.result);
          }
        }}
        />
      </label>
      <button className="btn btn-info" type="button" onClick={() => props.loadCsv(csvData1)}>
        Sample Csv #1
      </button>
      <button className="btn btn-info" type="button" onClick={() => props.loadCsv(csvData2)}>
        Sample Csv #2
      </button>
    </div>
  );
}

export default render;
