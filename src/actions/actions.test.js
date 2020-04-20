import * as actions from ".";

describe("Actions Tests", () => {
  it("should have a type of GET_CARDS, and correct payload", () => {
    const card1 = { name: "First Card" };
    const card2 = { name: "Second Card" };

    const expectedAction = {
      type: "GET_CARDS",
      cards: [card1, card2],
    };
    const result = actions.getCards([card1, card2]);

    expect(result).toEqual(expectedAction);
  });

  it("should have a type of GET_RANDOM_CARD, and correct payload", () => {
    const card = { name: "First Card" };

    const expectedAction = {
      type: "GET_RANDOM_CARD",
      randomCard: { card },
    };
    const result = actions.getRandomCard({ card });

    expect(result).toEqual(expectedAction);
  });

  it("should have a type of ADD_FAVORITE, and correct payload", () => {
    const card = { name: "First Card" };

    const expectedAction = {
      type: "ADD_FAVORITE",
      selectedCard: { card },
    };
    const result = actions.addFavorite({ card });

    expect(result).toEqual(expectedAction);
  });

  it("should have a type of DELETE_FAVORITE, and correct payload", () => {
    const card = { name: "First Card" };

    const expectedAction = {
      type: "DELETE_FAVORITE",
      selectedCard: { card },
    };
    const result = actions.deleteFavorite({ card });

    expect(result).toEqual(expectedAction);
  });

  it("should have a type of SEARCH, and correct payload", () => {
    const results = [{ name: "First Card" }];

    const expectedAction = {
      type: "SEARCH",
      results: { results },
    };
    const result = actions.search({ results });

    expect(result).toEqual(expectedAction);
  });
});
