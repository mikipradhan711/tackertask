var react = require('react');
var ReactDOM = require('react-dom');

const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  [<h1>
    Hello world!!
  </h1>,
  <h2> current date {currTime}</h2>
  ]
  ,
  document.getElementById('root')
);
