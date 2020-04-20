export const favorites = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.selectedCard];
    case "DELETE_FAVORITE":
      return [
        ...state.filter((item) => item.name !== action.selectedCard.name),
      ];
    default:
      return state;
  }
};
