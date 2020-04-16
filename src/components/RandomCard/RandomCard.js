import React, { Component } from 'react';
import { apiFetchRandomCard } from '../../apiCalls/apiCalls';
import goblet from '../../icons/goblet.png';
import whiteStar from '../../icons/white-star.png';
import { Link } from 'react-router-dom';

class RandomCard extends Component {
  constructor(props){
    super();
  }

  componentDidMount = () => {
    this.props.getRandomCard();
  }

  render() {
    return (
      <div className="dashboard">
        <div className='card-container'>
          <div className='card'>
            <h2>{this.props.card.name}</h2>
            <img src={goblet} className="goblet" alt="goblet" />
            <div className="suit-arcana">
              <h3 >{this.props.card.suit || `trump card`}</h3>
              <h3>{this.props.card.type}</h3>
            </div>
            <h3>meaning:</h3>
            <p>{this.props.card.meaning_up}</p>
            <button className="favorite-button">
              <img src={whiteStar} className="white-star" alt="favorite-card" />
            </button>
          </div>
        </div>
        <div className='buttons-container'>
          <button className='dashboard-buttons draw-card' onClick={this.props.getRandomCard}>
            <span>DRAW A CARD</span>
          </button>
          <Link to="/browse">
            <button className='dashboard-buttons browse'>
              <span>BROWSE CARDS</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }

}


export default RandomCard;
