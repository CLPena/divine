import React, { Component } from 'react';
import { apiFetchRandomCard } from '../../apiCalls/apiCalls';
import goblet from '../../icons/goblet.png';
import whiteStar from '../../icons/white-star.png';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

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
        <Card name={this.props.card.name} suit={this.props.card.suit} type={this.props.card.type} meaning_up={this.props.card.meaning_up}/>
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
