import * as React from 'react';

import {State, DataObject} from './shared/types';
import {initialState} from './shared/constants';

function useStopwatchWithState(): DataObject {
  const [lapse, setLapse] = React.useState<State['lapse']>(initialState.lapse);
  const [running, setRunning] = React.useState<State['running']>(initialState.running);
  
  const timerRef = React.useRef<number | undefined>(undefined);
  
  React.useEffect(() => {
    return () => clearInterval(timerRef.current)
  }, [])
  
  function run(): void {
    if (running) {
      clearInterval(timerRef.current);
    } else {
      const startTime = Date.now() - lapse;
      timerRef.current = window.setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0) as number;
    }
  
    setRunning(!running);
  }
  
  function clear(): void {
    clearInterval(timerRef.current);
    setLapse(initialState.lapse);
    setRunning(initialState.running);
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

export default useStopwatchWithState;
