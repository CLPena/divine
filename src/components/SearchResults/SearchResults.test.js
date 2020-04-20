import React from "react";
import SearchResults from "./SearchResults.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../reducers/index";

describe("SearchResults", () => {
  let testStore;
  let testWrapper;

  beforeEach(() => {
    testStore = createStore(rootReducer);
    testWrapper = (
      <Provider store={testStore}>
        <SearchResults />
      </Provider>
    );
  });

  it("Should render on the dashboard", () => {
    const { getByText } = render(testWrapper);
    const container = getByText("RESULTS:");
    expect(container).toBeInTheDocument();
  });

  it("Should render with no results by default", () => {
    const { getByText } = render(testWrapper);
    const message = getByText("No matching cards!");
    expect(message).toBeInTheDocument();
  });
});
