export const cards = (state = [], action) => {
  switch (action.type) {
    case 'GET_CARDS':
      return action.cards
    default:
    return state;
  }
}
