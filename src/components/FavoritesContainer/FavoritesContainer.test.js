import React from "react";
import FavoritesContainer from "./FavoritesContainer.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../reducers/index";

describe("Favorites", () => {
  let testStore;
  let testWrapper;

  beforeEach(() => {
    testStore = createStore(rootReducer);
    testWrapper = (
      <Provider store={testStore}>
        <FavoritesContainer />
      </Provider>
    );
  });

  it("Should render on the dashboard", () => {
    const { getByText } = render(testWrapper);
    const container = getByText("FAVORITES:");
    expect(container).toBeInTheDocument();
  });

  it("Should render with no favorites by default", () => {
    const { getByText } = render(testWrapper);
    const message = getByText("You have no favorites (yet)!");
    expect(message).toBeInTheDocument();
  });
});
