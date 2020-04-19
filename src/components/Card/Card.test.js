import React from 'react';
import Card from './Card.js';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import '@testing-library/jest-dom';

describe('Card', () => {
  let testStore;
  let testWrapper;

  beforeEach(() => {
    testStore = createStore(rootReducer);
    testWrapper = <Provider store={testStore}>
      <Card
        key={"Page of Pentacles"}
        name={"Page of Pentacles"}
        suit={"pentacles"}
        type={"minor"}
        meaning_up={"Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management."}
      />
    </Provider>;
  })

  it('should render the correct information on each card', () => {
    const { getByText, getByAltText } = render(testWrapper)

    const nameEl = getByText("Page of Pentacles");
    const suitEl = getByText("pentacles");
    const typeEl = getByText("minor arcana");
    const meaningEl = getByText("Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management.");
    const favoriteBtn = getByAltText("favorite-card");
    const icon = getByAltText("goblet");

    expect(nameEl).toBeInTheDocument();
    expect(suitEl).toBeInTheDocument();
    expect(typeEl).toBeInTheDocument();
    expect(meaningEl).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(favoriteBtn).toBeInTheDocument();
  });
    
});
