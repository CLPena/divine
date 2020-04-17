export const getCards = (cards)  => ({
  type: 'GET_CARDS',
  cards
})

export const getRandomCard = (randomCard) => ({
  type: 'GET_RANDOM_CARD',
  randomCard
})
