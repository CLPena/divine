import { cards } from "./cards";

describe("Cards Reducers Test", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = cards(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return cards if type is GET_CARDS", () => {
    const initialState = [];
    const expected = [{ name: "First Card" }, { name: "Second Card" }];
    const action = {
      type: "GET_CARDS",
      cards: [{ name: "First Card" }, { name: "Second Card" }],
    };
    const result = cards(initialState, action);

    expect(result).toEqual(expected);
  });
});
