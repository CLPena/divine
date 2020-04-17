import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { getCards } from '../../actions';

class Favorites extends Component {

  render() {
    return (
      <div className="favorites-dashboard">
        {this.props.favorites.map(card => {
          return <Card key={card.name} name={card.name} suit={card.suit} type={card.type} meaning_up={card.meaning_up}/>
        })}
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  getCards: cards => dispatch( getCards(cards) )
})

const mapStateToProps = (state) => ({
  cards: state.cards,
  favorites: state.favorites
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
