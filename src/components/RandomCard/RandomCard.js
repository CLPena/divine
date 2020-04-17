import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { getRandomCard } from '../../actions';
import { addFavorite } from '../../actions';
import { apiFetchRandomCard } from '../../apiCalls/apiCalls';

class RandomCard extends Component {
  getNewCard = () => {
    apiFetchRandomCard()
    .then(randomCard => this.props.getRandomCard(randomCard.cards[0]))
    .catch(err => console.log(err.message))
  }

  render() {
    return (
      <div className="dashboard">
        <Card name={this.props.randomCard.name}
          suit={this.props.randomCard.suit}
          meaning_up={this.props.randomCard.meaning_up}
          type={this.props.randomCard.type}
          />
        <div className='buttons-container'>
          <button className='dashboard-buttons draw-card' onClick={this.getNewCard}>
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


const mapStateToProps = (state) => ({
  randomCard: state.randomCard,
  favorites: state.favorites
});

const mapDispatchToProps = (dispatch) => ({
  getRandomCard: randomCard => dispatch( getRandomCard(randomCard) ),
  addFavorite: selectedCard => dispatch( addFavorite(selectedCard) )
})

export default connect(mapStateToProps, mapDispatchToProps)(RandomCard);
