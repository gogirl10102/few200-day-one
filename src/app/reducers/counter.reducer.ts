import { Action } from '@ngrx/store';



export interface State {
  current: number;
}

const initialState: State = {
  current: 0
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'increment': {
      return {
        current: state.current + 1
      };
    }
    case 'decrement': {
      return {
        current: state.current - 1
      };
    }
    case 'reset': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
