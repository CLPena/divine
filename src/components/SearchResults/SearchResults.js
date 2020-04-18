import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { getCards } from '../../actions';

class SearchResults extends Component {
//
  render() {
    return (<p>fasdfa</p>)
  //   let results=this.props.cards.filter(card =>
  //   card.name.includes(searchTerm))
  //
  //   // this.props.favorites.map(card => {
  //   //   return <Card key={card.name} name={card.name} suit={card.suit} type={card.type} meaning_up={card.meaning_up}/>
  //   // })
  //
  //   return (
  //     <div className="favorites-dashboard">
  //     <h2> RESULTS: </h2>
  //       {results}
  //     </div>
  //   );
  }
}

//
const mapDispatchToProps = (dispatch) => ({
  getCards: cards => dispatch( getCards(cards) )
})

const mapStateToProps = (state) => ({
  cards: state.cards,
  favorites: state.favorites,
  searchTerm: state.searchTerm
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
