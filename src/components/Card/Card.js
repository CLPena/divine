import React, { Component } from 'react';
import { connect } from 'react-redux';
import goblet from '../../icons/goblet.png';
import whiteStar from '../../icons/white-star.png';
import { toggleFavorite } from '../../actions';

class Card extends Component {

  toggleFavorite = (e) => {
    e.preventDefault();
    this.props.toggleFavorite(e.target.id)
  }

  render() {
    return (
      <div className='card-container'>
        <div className='card' >
          <h2>{this.props.name}</h2>
          <img src={goblet} className="goblet" alt="goblet" />
          <div className="suit-arcana">
            <h3>{this.props.type} arcana</h3>
            <h3 >{this.props.suit || `trump card`}</h3>
          </div>
          <h3>meaning:</h3>
          <p>{this.props.meaning_up}</p>
          <button className="favorite-button" onClick={this.toggleFavorite}>
            <img id={this.props.name} src={whiteStar} className="white-star" alt="favorite-card" />
          </button>
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
  toggleFavorite: selectedCard => dispatch( toggleFavorite(selectedCard) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
