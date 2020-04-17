export const getCards = (cards)  => ({
  type: 'GET_CARDS',
  cards
})

export const getRandomCard = (randomCard) => ({
  type: 'GET_RANDOM_CARD',
  randomCard
})

export const addFavorite = (selectedCard) => ({
  type: 'ADD_FAVORITE',
  selectedCard
})

export const deleteFavorite = (selectedCard) => ({
  type: 'DELETE_FAVORITE',
  selectedCard
})
