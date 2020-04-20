import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { render, waitFor, fireEvent, cleanup } from "@testing-library/react";
import { createStore } from "redux";
import { rootReducer } from "../../reducers";
import "@testing-library/jest-dom";
import {
  apiFetchRandomCard,
  apiFetchAllCards,
} from "../../apiCalls/apiCalls.js";

jest.mock("../../apiCalls/apiCalls.js");

describe("App", () => {
  let store;
  let utils;

  beforeEach(() => {
    apiFetchRandomCard.mockResolvedValueOnce({
      cards: [{ name: "First Card" }],
    });
    apiFetchAllCards.mockResolvedValueOnce({
      cards: [{ name: "First Card" }, { name: "Second Card" }],
    });

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

  it("should be able to change views to browse cards page", async () => {
    const { getByText } = utils;
    await waitFor(() => getByText("BROWSE CARDS"));
    fireEvent.click(getByText("BROWSE CARDS"));
    await waitFor(() => getByText("First Card"));
    await waitFor(() => getByText("Second Card"));
    expect(getByText("First Card")).toBeInTheDocument();
    expect(getByText("Second Card")).toBeInTheDocument();
  });

  it("should be able to change views to favorites page", async () => {
    const { getByText, getByTestId } = utils;
    await waitFor(() => getByText("FAVORITES"));
    fireEvent.click(getByText("FAVORITES"));
    await waitFor(() => getByTestId("favorites-dashboard"));
    expect(getByTestId("favorites-dashboard")).toBeInTheDocument();
  });

  it("should default to no favorites on favorites page", async () => {
    const { getByText, getByTestId } = utils;
    await waitFor(() => getByText("FAVORITES"));
    fireEvent.click(getByText("FAVORITES"));
    await waitFor(() => getByTestId("favorites-dashboard"));
    expect(getByText("You have no favorites (yet)!")).toBeInTheDocument();
  });


});
