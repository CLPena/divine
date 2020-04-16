import React from 'react';
import Nav from '../Nav/Nav'

function App() {
  return (
    <main>
      <Nav />
      <div className='card-container'>
        <div className='card'>
        </div>
      </div>
      <div className='buttons-container'>
        <button className='dashboard-buttons draw-card'>
          <span>DRAW A CARD</span>
        </button>
        <button className='dashboard-buttons browse'>
          <span>BROWSE CARDS</span>
        </button>
      </div>
    </main>
  );
}

export default App;
