import * as React from 'react';
import {useStopwatchWithState,} from './hooks'

function Stopwatch() {
  const {
    state: {lapse, running},
    handlers: {clear, run},
  } = useStopwatchWithState();

  return (
    <>
      <h1>{lapse} ms</h1>
      <div>
        <button onClick={run}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={clear}>Clear</button>
      </div>
    </>
  );
}

export default Stopwatch;
