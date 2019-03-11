import * as React from 'react';

import {Action, ActionType, State, DataObject} from './shared/types';
import {initialState} from './shared/constants';

function reducer(state: State, action: Action) {
  switch(action.type) {
    case ActionType.Update:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.Clear:
      return {
        ...state,
        ...initialState,
      }
    default:
      return initialState;  
  }
}

function useStopWatchWithReducer(): DataObject {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const {running, lapse} = state;

  const timerRef = React.useRef<number | undefined>(undefined);
  
  React.useEffect(() => {
    return () => clearInterval(timerRef.current)
  }, []);
  
  function run(): void {
    if (running) {
      clearInterval(timerRef.current);
    } else {
      const startTime = Date.now() - lapse;
      timerRef.current = window.setInterval(() => {
        dispatch({
          type: ActionType.Update,
          payload: {lapse: Date.now() - startTime},
        });
      }, 0) as number;
    }
  
    dispatch({
      type: ActionType.Update,
      payload: {running: !state.running},
    })
  }
  
  function clear(): void {
    clearInterval(timerRef.current);
    dispatch({
      type: ActionType.Clear,
    });
  }

  return {
    state: {
      lapse,
      running,
    },
    handlers: {
      run,
      clear,
    },
  };
}

export default useStopWatchWithReducer;
