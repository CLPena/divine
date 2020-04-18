import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { getCards } from '../../actions';

class SearchResults extends Component {

  render() {
    let results;
    if(this.props.search.length){
      results = this.props.search.map(card => {
        return <Card key={card.name} name={card.name} suit={card.suit} type={card.type} meaning_up={card.meaning_up}/>
      })
    } else {
      results = <h3>No matching cards!</h3>
    }

    return (
      <div className="search-dashboard">
      <h2> RESULTS: </h2>
        {results}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCards: cards => dispatch( getCards(cards) )
})

const mapStateToProps = (state) => ({
  cards: state.cards,
  favorites: state.favorites,
  search: state.search
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);