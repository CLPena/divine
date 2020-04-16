import React, { Component } from 'react';
import { apiFetchRandomCard } from '../../apiCalls/apiCalls';
import Nav from '../Nav/Nav';
import RandomCard from '../RandomCard/RandomCard';
import BrowseCards from '../BrowseCards/BrowseCards';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      card: {}
    }
  }

  getRandomCard = () => {
    apiFetchRandomCard()
    .then(data => this.setState({ card: data.cards[0] }))
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
              <RandomCard card={this.state.card} getRandomCard={this.getRandomCard}/>
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

export default App;
