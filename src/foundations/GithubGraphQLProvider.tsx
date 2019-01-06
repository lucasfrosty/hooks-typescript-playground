import * as React from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
  },
});

interface Props {
  children: React.ReactNode;
};

function GithubGraphQLProvider({children}: Props) {
  const fallback = <div>Loading...</div>;
  return (
    <ApolloProvider client={client}>
      <React.Suspense fallback={fallback} >
        {children}
      </React.Suspense>
    </ApolloProvider>
  );
}

export default GithubGraphQLProvider;
