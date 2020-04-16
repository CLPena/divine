import React from 'react';
import logo from '../../icons/moon.png';
import star from '../../icons/white-star.png'

const Nav = () => {
  return (
    <header>
      <button className='home'>
        <img className='logo' src={logo} alt='moon logo'/>
        <div className='nav-text'>
          <h1>DIVINE</h1>
          <h3>SIMPLE TAROT</h3>
        </div>
      </button>


      <button className="favorites">
        <span>
          <img className='star' src={star} alt='star icon'/>
          FAVORITES
        </span>
      </button>
    </header>
  );
}

export default Nav;
