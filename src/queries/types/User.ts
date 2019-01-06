/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user_organizations_edges_node {
  __typename: "Organization";
  /**
   * The organization's public profile name.
   */
  name: string | null;
}

export interface User_user_organizations_edges {
  __typename: "OrganizationEdge";
  /**
   * The item at the end of the edge.
   */
  node: User_user_organizations_edges_node | null;
}

export interface User_user_organizations {
  __typename: "OrganizationConnection";
  /**
   * A list of edges.
   */
  edges: (User_user_organizations_edges | null)[] | null;
}

export interface User_user {
  __typename: "User";
  id: string;
  /**
   * The user's public profile bio.
   */
  bio: string | null;
  /**
   * The user's public profile company.
   */
  company: string | null;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A list of organizations the user belongs to.
   */
  organizations: User_user_organizations;
}

export interface User {
  /**
   * Lookup a user by login.
   */
  user: User_user | null;
}
