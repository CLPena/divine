import React from "react";
import BrowseCards from "./BrowseCards.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../reducers/index";

describe("BrowseCards", () => {
  let testStore;
  let testWrapper;

  it("Should render on the dashboard", () => {
    testStore = createStore(rootReducer);
    testWrapper = (
      <Provider store={testStore}>
        <BrowseCards />
      </Provider>
    );
    const { getByTestId } = render(testWrapper);
    const container = getByTestId("browse-dashboard");
    expect(container).toBeInTheDocument();
  });
});
