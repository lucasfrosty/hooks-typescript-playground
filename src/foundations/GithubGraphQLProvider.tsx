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
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

export default GithubGraphQLProvider;
