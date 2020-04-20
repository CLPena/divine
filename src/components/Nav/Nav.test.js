import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/'
import '@testing-library/jest-dom';

describe("Nav", () => {
  let testStore;
  let testWrapper;
  beforeEach(() => {
    testStore = createStore(rootReducer);
    testWrapper = <Provider store={testStore}>
      <Router>
        <Nav/>
      </Router>
    </Provider>
  })

  it('should render the logo', () => {
    const { getByText, getByAltText } = render (testWrapper)
    const title = getByText("DIVINE");
    const moon = getByAltText("moon logo")
    expect(title).toBeInTheDocument();
    expect(moon).toBeInTheDocument();
  })

  it('should render with a button to view favorites', () => {
    const { getByTestId } = render (testWrapper)
    const favorites = getByTestId("favorites");
    expect(favorites).toBeInTheDocument();
  })
})
