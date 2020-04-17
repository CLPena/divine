import React, { Component } from 'react';
import { connect } from 'react-redux';
import goblet from '../../icons/goblet.png';
import whiteStar from '../../icons/white-star.png';

class Card extends Component {

  render() {
    return (
      <div className='card-container'>
        <div className='card'>
          <h2>{this.props.name}</h2>
          <img src={goblet} className="goblet" alt="goblet" />
          <div className="suit-arcana">
          <h3>{this.props.type}</h3>
            <h3 >{this.props.suit || `trump card`}</h3>
          </div>
          <h3>meaning:</h3>
          <p>{this.props.meaning_up}</p>
          <button className="favorite-button">
            <img src={whiteStar} className="white-star" alt="favorite-card" />
          </button>
        </div>
      </div>
    );
  }

}



const mapStateToProps = (state) => ({
  randomCard: state.randomCard
});

const mapDispatchToProps = (dispatch) => ({
  // getRandomCard: randomCard => dispatch( getRandomCard(randomCard) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
