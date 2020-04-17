import React, { Component } from 'react';
import { apiFetchAllCards } from '../../apiCalls/apiCalls';
import Card from '../Card/Card';

class BrowseCards extends Component {
  constructor(props){
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount = () => {
    apiFetchAllCards()
    .then(data => this.setState({cards: data.cards}))
  }

  render() {
    return (
      <div className="browse-dashboard">
        {this.state.cards.map(card => {
          return <Card key={card.name} name={card.name} suit={card.suit} type={card.type} meaning_up={card.meaning_up}/>
        })}
      </div>
    );
  }

}


export default BrowseCards;
