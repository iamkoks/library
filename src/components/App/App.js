import React from 'react';
import WannaBook from '../WannaBook/WannaBook';
import BookEnd from '../BookEnd/index'
import Nav from '../Nav/Nav'
import './index.css'

function App() {
  return (
    <div className="MainDiv">
      <Nav></Nav>
      {/* <WannaBook></WannaBook> */}
      <BookEnd></BookEnd>
    </div>
  );
}

export default App;
