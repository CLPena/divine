import React, { Component } from "react";
import { connect } from "react-redux";
import goblet from "../../icons/goblet.png";
import whiteStar from "../../icons/white-star.png";
import { addFavorite, deleteFavorite } from "../../actions";
import PropTypes from "prop-types";

class Card extends Component {
  toggleFavorite = (e) => {
    e.preventDefault();
    let selectedCard = this.props.cards.find(
      (card) => card.name === e.target.id
    );
    let matchingCard = this.props.favorites.find(
      (card) => card.name === selectedCard.name
    );

    if (matchingCard) {
      this.props.deleteFavorite(selectedCard);
    } else {
      this.props.addFavorite(selectedCard);
    }
  };

  render() {
    let classes;

    if (this.props.favorites.find((card) => card.name === this.props.name)) {
      classes = "favorited card";
    } else {
      classes = "card";
    }

    return (
      <div className="card-container">
        <div className={classes}>
          <h2>{this.props.name}</h2>
          <img src={goblet} className="goblet" alt="goblet" />
          <div className="suit-arcana">
            <h3>{this.props.type} arcana</h3>
            <h3>{this.props.suit || `trump card`}</h3>
          </div>
          <h3>meaning:</h3>
          <p>{this.props.meaning_up}</p>
          <button
            id={this.props.name}
            data-testid={`favorite-${this.props.name}`}
            className="favorite-button"
            onClick={this.toggleFavorite}
          >
            <img
              id={this.props.name}
              src={whiteStar}
              className="white-star"
              alt="favorite-card"
            />
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  randomCard: PropTypes.object,
  favorites: PropTypes.array,
  cards: PropTypes.array,
  addFavorite: PropTypes.func,
  deleteFavorite: PropTypes.func,
};

const mapStateToProps = (state) => ({
  randomCard: state.randomCard,
  favorites: state.favorites,
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (selectedCard) => dispatch(addFavorite(selectedCard)),
  deleteFavorite: (selectedCard) => dispatch(deleteFavorite(selectedCard)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
