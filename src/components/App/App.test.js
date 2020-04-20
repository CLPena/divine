import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

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
      cards: [{ name: "First Card", meaning_up: "First meaning" }],
    });
    apiFetchAllCards.mockResolvedValueOnce({
      cards: [
        { name: "First Card", meaning_up: "First meaning" },
        { name: "Second Card", meaning_up: "Second meaning" },
      ],
    });

    const history = createMemoryHistory();

    store = createStore(rootReducer);
    utils = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  afterEach(cleanup);

  it("When the app loads we should see a random card", async () => {
    const { getByText } = utils;
    const randomCard = await waitFor(() => getByText("First Card"));
    expect(randomCard).toBeInTheDocument();
  });

  it("should be able to change views to browse cards page", async () => {
    const { getByText } = utils;
    fireEvent.click(getByText("BROWSE CARDS"));
    await waitFor(() => getByText("First Card"));
    await waitFor(() => getByText("Second Card"));
    expect(getByText("First Card")).toBeInTheDocument();
    expect(getByText("Second Card")).toBeInTheDocument();
  });

  it("should be able to change views to favorites page", async () => {
    const { getByText, getByTestId } = utils;
    fireEvent.click(getByText("FAVORITES"));
    await waitFor(() => getByTestId("favorites-dashboard"));
    expect(getByTestId("favorites-dashboard")).toBeInTheDocument();
  });

  it("should default to no favorites on favorites page", async () => {
    const { getByText, getByTestId } = utils;
    fireEvent.click(getByText("FAVORITES"));
    await waitFor(() => getByTestId("favorites-dashboard"));
    expect(getByText("You have no favorites (yet)!")).toBeInTheDocument();
  });

  it("should be able to add a card to favorites", async () => {
    const { getByText, getByTestId } = utils;
    fireEvent.click(getByText("BROWSE CARDS"));
    await waitFor(() => getByText("First Card"));
    await waitFor(() => getByText("Second Card"));
    fireEvent.click(getByTestId("favorite-Second Card"));
    fireEvent.click(getByText("FAVORITES"));
    expect(getByText("Second Card")).toBeInTheDocument();
  });

  it("should be able to remove a card from favorites", async () => {
    const { getByText, getByTestId, queryByTestId } = utils;
    fireEvent.click(getByText("BROWSE CARDS"));
    await waitFor(() => getByText("First Card"));
    await waitFor(() => getByText("Second Card"));
    fireEvent.click(getByTestId("favorite-First Card"));
    fireEvent.click(getByTestId("favorite-Second Card"));
    fireEvent.click(getByText("FAVORITES"));
    expect(getByText("Second Card")).toBeInTheDocument();
    fireEvent.click(getByTestId("favorite-Second Card"));
    expect(queryByTestId("favorite-Second Card")).toBeNull();
  });

  it("should allow a user to enter text into the search bar", async () => {
    const { getByPlaceholderText, getByText } = utils;
    fireEvent.change(getByPlaceholderText("search..."), {
      target: { value: "First Card" },
    });
    expect(getByText("First Card")).toBeInTheDocument();
  });

  it("should submit a search and display matching results", async () => {
    const {
      getByPlaceholderText,
      getByTestId,
      getByText,
      queryByTestId,
    } = utils;
    fireEvent.change(getByPlaceholderText("search..."), {
      target: { value: "First Card" },
    });
    fireEvent.click(getByTestId("search-button"));
    expect(getByText("First Card")).toBeInTheDocument();
  });

  it("should submit a search and not display non-matching results", async () => {
    const { getByPlaceholderText, getByTestId, queryByText } = utils;
    fireEvent.change(getByPlaceholderText("search..."), {
      target: { value: "First Card" },
    });
    fireEvent.click(getByTestId("search-button"));
    expect(queryByText("Second Card")).toBeNull();
  });

  it("should redirect to the search results page when a valid search is submitted", async () => {
    const {
      getByPlaceholderText,
      getByTestId,
      getByText,
      queryByTestId,
    } = utils;
    fireEvent.change(getByPlaceholderText("search..."), {
      target: { value: "First Card" },
    });
    fireEvent.click(getByTestId("search-button"));
    expect(getByText("RESULTS:")).toBeInTheDocument();
  });

  it("should submit a search and display error message if no matching results", async () => {
    const { getByPlaceholderText, getByTestId, getByText } = utils;
    fireEvent.change(getByPlaceholderText("search..."), {
      target: { value: "No!" },
    });
    fireEvent.click(getByTestId("search-button"));
    expect(getByText("Sorry, no matches found!")).toBeInTheDocument();
  });

  it("should stay on main dashboard if there are no matching results to search", async () => {
    const { getByPlaceholderText, getByTestId, getByText } = utils;
    fireEvent.change(getByPlaceholderText("search..."), {
      target: { value: "No!" },
    });
    fireEvent.click(getByTestId("search-button"));
    expect(getByText("DRAW A CARD")).toBeInTheDocument();
  });
});
