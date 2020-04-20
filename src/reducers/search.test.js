import { search } from "./search";

describe("Search Reducers Test", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = search(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return results if type is SEARCH", () => {
    const initialState = [];
    const expected = [{ name: "First Card" }];
    const action = {
      type: "SEARCH",
      results: [{ name: "First Card" }],
    };
    const result = search(initialState, action);

    expect(result).toEqual(expected);
  });
});
