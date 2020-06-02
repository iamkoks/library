import React from 'react';
import WannaBook from '../WannaBook/WannaBook';
import BookEnd from '../BookEnd/index'
import Nav from '../Nav/Nav'
import NavBot from '../NavBottom/index'
import './index.css'

function App() {
  return (
    <div className="MainDiv">
      <Nav></Nav>
      <div className="Book">
        <BookEnd></BookEnd>
        <WannaBook></WannaBook>
      </div>
      <div className="NavBot">
        <NavBot></NavBot>
      </div>
    </div>
  );
}

export default App;
