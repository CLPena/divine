import { combineReducers } from "redux";
import { cards } from "./cards";
import { randomCard } from "./randomCard";
import { favorites } from "./favorites";
import { search } from "./search";

export const rootReducer = combineReducers({
  cards,
  randomCard,
  favorites,
  search,
});
