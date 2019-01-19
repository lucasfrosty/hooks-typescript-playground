import * as React from 'react';

import {useWindowResolution} from './hooks';

function ResolutionTracker() {
  const {width, height} = useWindowResolution();

  return (
    <div>
      <p>Width: {width}</p>
      <p>Height {height}</p>
    </div>
  ); 
}

export default ResolutionTracker;
