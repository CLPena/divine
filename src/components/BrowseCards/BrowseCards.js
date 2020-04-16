import React, { Component } from 'react';
import goblet from '../../icons/goblet.png';
import whiteStar from '../../icons/white-star.png';
import { apiFetchAllCards } from '../../apiCalls/apiCalls';

class BrowseCards extends Component {
  constructor(props){
    super();
  }

  componentDidMount = () => {
    apiFetchAllCards()
  }

  render() {
    return (
      <div className="dashboard">
      </div>
    );
  }

}


export default BrowseCards;
