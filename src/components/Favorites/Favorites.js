import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { getCards } from '../../actions';

class Favorites extends Component {

  render() {
    let favs;
    if(this.props.favorites.length){
      favs = this.props.favorites.map(card => {
        return <Card key={card.name} name={card.name} suit={card.suit} type={card.type} meaning_up={card.meaning_up}/>
      })
    } else {
      favs = <h3>You have no favorites (yet)!</h3>
    }

    return (
      <div className="favorites-dashboard">
      <h2> FAVORITES: </h2>
        {favs}
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