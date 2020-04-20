import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomCard } from '../../actions';
import { Route, Switch } from 'react-router-dom';
import { getCards } from '../../actions';

import Nav from '../Nav/Nav';
import RandomCard from '../RandomCard/RandomCard';
import BrowseCards from '../BrowseCards/BrowseCards';
import Favorites from '../Favorites/Favorites';
import SearchResults from '../SearchResults/SearchResults';
import PropTypes from 'prop-types';

import { apiFetchRandomCard, apiFetchAllCards } from '../../apiCalls/apiCalls';

class App extends Component {
  componentDidMount = () => {
    apiFetchRandomCard()
    .then(randomCard => this.props.getRandomCard(randomCard.cards[0]))
    .catch(err => console.log(err.message))

    apiFetchAllCards()
    .then(data => this.props.getCards(data.cards))
    .catch(err => console.log(err.message))
  }

  render() {
    return (
      <main>
        <Nav />
        <Switch>

          <Route
            exact
            path="/"
            render={() => (
              <RandomCard />
            )}
          />

          <Route
            path="/browse"
            exact
            render={() => (
              <BrowseCards />
            )}
          />

          <Route
            path="/favorites"
            exact
            render={() => (
              <Favorites />
            )}
          />

          <Route
            path="/search"
            exact
            render={() => (
              <SearchResults />
            )}
          />

          <Route
          path="*"
          render={() => (
            <RandomCard />
          )}
          />

        </Switch>
      </main>
    );
  }
}

App.propTypes = {
  randomCard: PropTypes.object,
  favorites: PropTypes.array,
  getRandomCard: PropTypes.func,
  getCards: PropTypes.func
}

const mapStateToProps = (state) => ({
  randomCard: state.randomCard,
  favorites: state.favorites
});

const mapDispatchToProps = (dispatch) => ({
  getRandomCard: randomCard => dispatch( getRandomCard(randomCard) ),
  getCards: cards => dispatch( getCards(cards) )
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
