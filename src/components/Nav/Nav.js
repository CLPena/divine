import React from "react";
import logo from "../../icons/moon.png";
import star from "../../icons/white-star.png";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";

const Nav = () => {
  return (
    <header>
      <Link to="/">
        <button className="home">
          <img className="logo" src={logo} alt="moon logo" />
          <div className="nav-text">
            <h1>DIVINE</h1>
            <h3>SIMPLE TAROT</h3>
          </div>
        </button>
      </Link>
      <Link to="/favorites">
        <button className="favorites" data-testid="favorites">
          <span>
            <img className="star" src={star} alt="star icon" />
            FAVORITES
          </span>
        </button>
      </Link>
      <SearchForm />
    </header>
  );
};

export default Nav;
