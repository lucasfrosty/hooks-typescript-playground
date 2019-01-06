import * as React from 'react';
import {useQuery} from 'react-apollo-hooks';

import {GET_USER} from 'src/queries';
import {User} from 'src/queries/types/User';

function GithubInfo() {
  const {data, errors} = useQuery<User>(GET_USER);

  if (errors) {
    return (
      <ul>
        {errors.map(error => <li key={error.name}>{error.message}</li>)}
      </ul>
    );
  }

  if (!data.user) {
    return;
  }

  return <h1>{data.user.name}</h1>
}

export default GithubInfo;
