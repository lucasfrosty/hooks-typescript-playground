import * as React from 'react';


interface Initial {
  lapse: number;
  running: boolean;
}

const initial: Initial = {
  lapse: 0,
  running: false,
}

function Stopwatch() {
  const [lapse, setLapse] = React.useState<Initial['lapse']>(initial.lapse);
  const [running, setRunning] = React.useState<Initial['running']>(initial.running);

  const timerRef = React.useRef<any>(undefined);

  React.useEffect(() => {
    return () => clearInterval(timerRef.current)
  }, [])

  function run() {
    if (running) {
      clearInterval(timerRef.current);
    } else {
      const startTime = Date.now() - lapse;
      timerRef.current = setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0);
    }

    setRunning(!running);
  }

  function clear() {
    clearInterval(timerRef.current);
    setLapse(initial.lapse);
    setRunning(initial.running);
  }

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
