import React from 'react';
import SearchForm from './SearchForm.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';

describe('SearchForm', () => {
  let testStore;
  let testWrapper;

  beforeEach(() => {
    testStore = createStore(rootReducer);
    testWrapper = <Provider store={testStore}>
      <Router>
        <SearchForm />
      </Router>
    </Provider>;
  })

  it('Should render with a search bar', () => {
    const { getByPlaceholderText } = render(testWrapper);
    const searchBar = getByPlaceholderText("search...")
    expect(searchBar).toBeInTheDocument();
  })

  it('Should render with a search button', () => {
    const { getByTestId } = render(testWrapper);
    const searchButton = getByTestId("search-button")
    expect(searchButton).toBeInTheDocument();
  })

})
