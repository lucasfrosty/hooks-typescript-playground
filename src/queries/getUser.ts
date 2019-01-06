import gql from 'graphql-tag';

export default gql`
  query User {
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
