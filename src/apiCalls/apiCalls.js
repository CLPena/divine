const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://rws-cards-api.herokuapp.com/api/v1";
const RANDOM_CARD_ENDPOINT = "/cards/random";
const ALL_CARDS_ENDPOINT = "/cards";

export const apiFetchRandomCard = async () => {
  return await fetch(BASE_URL + RANDOM_CARD_ENDPOINT).then((response) =>
    response.json()
  );
};

export const apiFetchAllCards = async () => {
  return await fetch(BASE_URL + ALL_CARDS_ENDPOINT).then((response) =>
    response.json()
  );
};
