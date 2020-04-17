import { combineReducers } from 'redux';
import { cards } from './cards';
import { randomCard } from './randomCard';
import { favorites } from './favorites';

export const rootReducer = combineReducers({
  cards,
  randomCard,
  favorites
})
