import { randomCard } from "./randomCard";

describe("randomCard Reducers Test", () => {
  it("should return the initial state", () => {
    const expected = {};
    const result = randomCard(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return a random card if type is GET_RANDOM_CARD", () => {
    const initialState = [];
    const expected = [{ name: "First Card" }];
    const action = {
      type: "GET_RANDOM_CARD",
      randomCard: [{ name: "First Card" }],
    };
    const result = randomCard(initialState, action);

    expect(result).toEqual(expected);
  });
});
