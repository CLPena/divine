import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { getCards } from "../../actions";
import PropTypes from "prop-types";

class BrowseCards extends Component {
  render() {
    return (
      <div className="browse-dashboard" data-testid="browse-dashboard">
        {this.props.cards.map((card) => {
          return (
            <Card
              key={card.name}
              name={card.name}
              suit={card.suit}
              type={card.type}
              meaning_up={card.meaning_up}
            />
          );
        })}
      </div>
    );
  }
}

BrowseCards.propTypes = {
  favorites: PropTypes.array,
  cards: PropTypes.array,
  getCards: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cards: state.cards,
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  getCards: (cards) => dispatch(getCards(cards)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BrowseCards);
