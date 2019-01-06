import * as React from 'react';

import {GithubInfo} from './components';
import {GithubGraphQLProvider} from './foundations'

function App() {
  return (
    <GithubGraphQLProvider>
      <GithubInfo />
    </GithubGraphQLProvider>
  );
}

export default App;
