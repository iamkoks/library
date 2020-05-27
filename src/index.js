import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WannaBook from './WannaBook';
import BookEnd from './BookEnd'


ReactDOM.render(
  <React.StrictMode>
    <App></App>
    {/* <WannaBook></WannaBook> */}
    <BookEnd></BookEnd>
  </React.StrictMode>,
  document.getElementById('root')
);


