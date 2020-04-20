import React from 'react';
import RandomCard from './RandomCard.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import '@testing-library/jest-dom';

describe('RandomCard', () => {
  let testStore;
  let testWrapper;

  beforeEach(() => {
    testStore = createStore(rootReducer);
    testWrapper = <Provider store={testStore}>
      <Router>
        <RandomCard />
      </Router>
    </Provider>;
  })

  it('should render a button to draw a new card', () => {
    const { getByText } = render(testWrapper)
    const drawBtn = getByText("DRAW A CARD");
    expect(drawBtn).toBeInTheDocument();
  });

  it('should render a button to browse all cards', () => {
    const { getByText } = render(testWrapper)
    const browseBtn = getByText("BROWSE CARDS");
    expect(browseBtn).toBeInTheDocument();
  });

});
