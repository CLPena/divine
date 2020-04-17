export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return [...state, action.selectedCard ]
    default:
    return state;
  }
}
