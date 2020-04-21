import React, { Component } from "react";
import { connect } from "react-redux";
import { getRandomCard } from "../../actions";
import { getCards } from "../../actions";

import { Route, Switch } from "react-router-dom";
import Nav from "../Nav/Nav";
import RandomCard from "../RandomCard/RandomCard";
import BrowseCards from "../BrowseCards/BrowseCards";
import FavoritesContainer from "../FavoritesContainer/FavoritesContainer";
import SearchResultsContainer from "../SearchResultsContainer/SearchResultsContainer";
import PropTypes from "prop-types";

import { apiFetchRandomCard, apiFetchAllCards } from "../../apiCalls/apiCalls";

  class App extends Component {
  componentDidMount = () => {
    apiFetchRandomCard()
      .then((randomCard) => this.props.getRandomCard(randomCard.cards[0]))
      .catch((err) => console.log(err.message));

    apiFetchAllCards()
      .then((data) => this.props.getCards(data.cards))
      .catch((err) => console.log(err.message));
  };

  render() {
    return (
      <main>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <RandomCard />} />

          <Route
            exact
            path="/browse"
            render={() => <BrowseCards />} />

          <Route
            exact
            path="/favorites"
            render={() => <FavoritesContainer />}
          />

          <Route
            exact
            path="/search"
            render={() => <SearchResultsContainer />}
          />

          <Route
            path="*"
            render={() => <RandomCard />} />
        </Switch>
      </main>
    );
  }
}

App.propTypes = {
  randomCard: PropTypes.object,
  favorites: PropTypes.array,
  getRandomCard: PropTypes.func,
  getCards: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getRandomCard: (randomCard) => dispatch(getRandomCard(randomCard)),
  getCards: (cards) => dispatch(getCards(cards)),
});

export default connect(null, mapDispatchToProps)(App);
