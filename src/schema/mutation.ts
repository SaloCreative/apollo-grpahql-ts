import { gql } from 'apollo-server';

const mutation = gql`
  type Mutation {
    login(email: String!, password: String!): Login
  }
`;

export default mutation;
