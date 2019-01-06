import * as React from 'react';
import gql from 'graphql-tag';
import {useQuery} from 'react-apollo-hooks';

const GET_USER = gql`
  query {
    user(login: "lucasfrosty") {
      id
      bio
      company
      name
      login
      organizations(first: 1) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

function GithubInfo() {
  const {data} = useQuery(GET_USER);
  return <h1>{data.user.name}</h1>
}

export default GithubInfo;
