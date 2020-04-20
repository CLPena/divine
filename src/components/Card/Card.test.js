import React from "react";
import Card from "./Card.js";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../reducers";
import "@testing-library/jest-dom";

describe("Card", () => {
  let testStore;
  let testWrapper;

  beforeEach(() => {
    testStore = createStore(rootReducer);
    testWrapper = (
      <Provider store={testStore}>
        <Card
          key={"Page of Pentacles"}
          name={"Page of Pentacles"}
          suit={"pentacles"}
          type={"minor"}
          meaning_up={
            "Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management."
          }
        />
      </Provider>
    );
  });

  it("should render the correct name on the card", () => {
    const { getByText } = render(testWrapper);
    const nameEl = getByText("Page of Pentacles");
    expect(nameEl).toBeInTheDocument();
  });

  it("should render the correct suit on the card", () => {
    const { getByText } = render(testWrapper);
    const suitEl = getByText("pentacles");
    expect(suitEl).toBeInTheDocument();
  });

  it("should render the correct type on the card", () => {
    const { getByText } = render(testWrapper);
    const typeEl = getByText("minor arcana");
    expect(typeEl).toBeInTheDocument();
  });

  it("should render the correct meaning on the card", () => {
    const { getByText } = render(testWrapper);
    const meaningEl = getByText(
      "Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management."
    );
    expect(meaningEl).toBeInTheDocument();
  });

  it("should render with the goblet icon on the card", () => {
    const { getByAltText } = render(testWrapper);
    const icon = getByAltText("goblet");
    expect(icon).toBeInTheDocument();
  });

  it("should render with a favorite button on the card", () => {
    const { getByTestId } = render(testWrapper);
    const favoriteBtn = getByTestId("favorite-Page of Pentacles");
    expect(favoriteBtn).toBeInTheDocument();
  });
});
