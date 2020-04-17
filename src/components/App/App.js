import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomCard } from '../../actions';
import { Route, Switch } from 'react-router-dom';
import { getCards } from '../../actions';

import Nav from '../Nav/Nav';
import RandomCard from '../RandomCard/RandomCard';
import BrowseCards from '../BrowseCards/BrowseCards';

import { apiFetchRandomCard } from '../../apiCalls/apiCalls';

class App extends Component {
  componentDidMount = () => {
    apiFetchRandomCard()
    .then(randomCard => this.props.getRandomCard(randomCard.cards[0]))
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
            render={() => (
              <BrowseCards />
            )}
          />

        </Switch>
      </main>
    );
  }
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
