import { createReducer, on } from '@ngrx/store';
import { increment } from './cards.actions';

export const initialState = 3;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 13)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
