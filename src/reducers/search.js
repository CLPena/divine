export const search = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH':
      state = action.results
      return state;
    default:
      return state;
  }
}
