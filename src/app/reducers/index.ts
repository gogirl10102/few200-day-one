import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';

export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};

// Selector functions

export const selectCurrentCount = (state: State) => state.counter.current;

// export const selectCannotDecrement = (state: State) => state.counter.current === 0;
export const selectCountingBy = (state: State) => state.counter.by;

export const selectCantDecrement = createSelector(selectCurrentCount, selectCountingBy, (c, b) => c - b < 0);

export const selectAtTheStart = createSelector(selectCountingBy, c => c === 0);
