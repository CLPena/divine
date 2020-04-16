import React from 'react';
import Nav from '../Nav/Nav'

function App() {
  return (
    <main>
      <Nav />
      <div className='random-card-container'>
      </div>
      <button className='dashboard-buttons draw-card'>
        <span>DRAW A CARD</span>
      </button>
      <button className='dashboard-buttons browse'>
        <span>BROWSE CARDS</span>
      </button>
    </main>
  );
}

export default App;
