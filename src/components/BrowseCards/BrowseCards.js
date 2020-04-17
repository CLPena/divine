import React, { Component } from 'react';
import { apiFetchAllCards } from '../../apiCalls/apiCalls';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite, getCards } from '../../actions';

class BrowseCards extends Component {
  constructor(props){
    super();
  }

  // componentDidMount = () => {
  //   let cards;
  //   apiFetchAllCards()
  //   .then(data => cards = data)
  //   .then(cards => this.props.getCards(cards.cards))
  //   .catch(err => console.log(err.message))
  // }

  render() {
    return (
      <div className="browse-dashboard">
        {this.props.cards.map(card => {
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

export default connect(mapStateToProps, mapDispatchToProps)(BrowseCards);
