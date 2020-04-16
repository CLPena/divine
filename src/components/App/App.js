import React from 'react';
import './App.scss';
import Nav from '../Nav/Nav'

function App() {
  return (
    <main>
      <Nav />
      <div className='random-card-container'>
      </div>
      <button className='dashboard-buttons draw-card'>
        DRAW A CARD
      </button>
      <button className='dashboard-buttons browse'>
        BROWSE CARDS
      </button>
    </main>
  );
}

export default App;
