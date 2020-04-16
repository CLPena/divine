import React, { Component } from 'react';
import { apiFetchRandomCard } from '../../apiCalls/apiCalls';
import divider from '../../icons/divider.png';
import goblet from '../../icons/goblet.png';
import whiteStar from '../../icons/white-star.png';

class RandomCard extends Component {
  constructor(){
    super();
    this.state ={
      card: {}
    }
  }

  componentDidMount = () => {
    apiFetchRandomCard()
      .then(data => this.setState({ card: data.cards[0] }))
  }

  render() {
    return (
      <div className='card-container'>
        <div className='card'>
          <h2>{this.state.card.name}</h2>
          <img src={goblet} className="goblet" alt="goblet" />
          <div className="suit-arcana">
            <h3 >{this.state.card.suit || `trump card`}</h3>
            <h3>{this.state.card.type}</h3>
          </div>
          <h3>meaning:</h3>
          <p>{this.state.card.meaning_up}</p>
          <button className="favorite-button">
            <img src={whiteStar} className="white-star" alt="favorite-card" />
          </button>
        </div>
      </div>
    );
  }

}


export default RandomCard;
