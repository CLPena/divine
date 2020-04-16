import React from 'react';
import './Nav.scss';
import logo from '../../icons/moon.png';
import star from '../../icons/star.png'

const Nav = () => {
  return (
    <header>
      <button className='home'>
        <img className='logo' src={logo} alt='moon logo'/>
      </button>
      <div className='nav-text'>
        <h1>DIVINE</h1>
        <h3>SIMPLE TAROT</h3>
      </div>
      <button className='favorites'>
        <img className='star' src={star} alt='star icon'/>
        FAVORITES
      </button>
    </header>
  );
}

export default Nav;
