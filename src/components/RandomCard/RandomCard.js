import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { getRandomCard } from '../../actions';

import { apiFetchRandomCard } from '../../apiCalls/apiCalls';


class RandomCard extends Component {
  // constructor(){
  //   super();
  //   // this.state = {
  //   //   randomCard: {}
  //   // }
  // }

  // componentDidMount = () => {
  //   getRandomCard();
  // }

  render() {
    // console.log(getRandomCard(apiFetchRandomCard()));
    return (
      <div className="dashboard">
        <Card name={this.props.randomCard.name} suit={this.props.randomCard.suit} type={this.props.randomCard.type} meaning_up={this.props.randomCard.meaning_up}/>
        <div className='buttons-container'>
          <button className='dashboard-buttons draw-card' onClick={getRandomCard}>
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

const mapDispatchToProps = (dispatch) => ({
  fetchRandomCard: randomCard => dispatch( getRandomCard(randomCard) )
})

const mapStateToProps = (state) => ({
  randomCard: state.randomCard
})

export default connect(mapStateToProps, mapDispatchToProps)(RandomCard);
