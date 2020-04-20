import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import { render, waitFor, cleanup } from "@testing-library/react";
import { createStore } from "redux";
import { rootReducer } from "../../reducers";
import "@testing-library/jest-dom";
import { apiFetchRandomCard, apiFetchAllCards } from "../../apiCalls/apiCalls.js";

jest.mock("../../apiCalls/apiCalls.js");

describe("App", () => {
  let store;
  let utils;

  beforeEach(() => {
    apiFetchRandomCard.mockResolvedValueOnce({cards: [{ name: "First Card" }]});
    apiFetchAllCards.mockResolvedValueOnce({cards: [{ name: "First Card" }]});

    store = createStore(rootReducer);
    utils = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  });

  afterEach(() => {
    cleanup;
  });

  it("When the app loads we should see a random card", async () => {
    const { getByText } = utils;

    const randomCard = await waitFor(() => getByText("First Card"));

    expect(randomCard).toBeInTheDocument();
  });
});
