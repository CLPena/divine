export const randomCard = (state = {}, action) => {
  switch (action.type) {
    case 'GET_RANDOM_CARD':
      return action.randomCard
    default:
      return state;
  }
}
