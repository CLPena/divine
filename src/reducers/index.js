import { combineReducers } from 'redux';
import { cards } from './cards';
import { randomCard } from './randomCard';

export const rootReducer = combineReducers({
  cards,
  randomCard
})
