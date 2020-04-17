export const getCards = (cards)  => ({
  type: 'GET_CARDS',
  cards
})

export const getRandomCard = (randomCard) => ({
  type: 'GET_RANDOM_CARD',
  randomCard
})

export const toggleFavorite = (selectedCard) => ({
  type: 'TOGGLE_FAVORITE',
  selectedCard
})
