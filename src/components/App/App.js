import React from 'react';
import Nav from '../Nav/Nav'
import RandomCard from '../RandomCard/RandomCard'

function App() {
  return (
    <main>
      <Nav />
        <RandomCard />
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
