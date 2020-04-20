import { favorites } from "./favorites";

describe("Favorites Reducers Test", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = favorites(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return favorites if type is ADD_FAVORITE", () => {
    const initialState = [];
    const expected = [{ name: "First Card" }];
    const action = {
      type: "ADD_FAVORITE",
      selectedCard: { name: "First Card" },
    };
    const result = favorites(initialState, action);

    expect(result).toEqual(expected);
  });

  it("should return favorites if type is DELETE_FAVORITE", () => {
    const initialState = [{ name: "First Card" }];
    const expected = [];
    const action = {
      type: "DELETE_FAVORITE",
      selectedCard: { name: "First Card" },
    };
    const result = favorites(initialState, action);

    expect(result).toEqual(expected);
  });
});
