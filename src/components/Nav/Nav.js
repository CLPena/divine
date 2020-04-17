import React from 'react';
import logo from '../../icons/moon.png';
import star from '../../icons/white-star.png';
import planet from '../../icons/planet.png'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <Link to="/">
        <button className='home'>
          <img className='logo' src={logo} alt='moon logo'/>
          <div className='nav-text'>
            <h1>DIVINE</h1>
            <h3>SIMPLE TAROT</h3>
          </div>
        </button>
      </Link>
      <Link to="/favorites">
        <button className="favorites">
          <span>
            <img className='star' src={star} alt='star icon'/>
            FAVORITES
          </span>
        </button>
      </Link>
      <span className="search-container">
        <input className="search" placeholder="search...">
        </input>
        <button className="search-button"><img className='planet' src={planet} alt='search icon'/></button>
      </span>
    </header>
  );
}

export default Nav;
