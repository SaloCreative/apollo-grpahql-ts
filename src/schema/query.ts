import { gql } from 'apollo-server';

const query = gql`
  type Query {
    location(id: Int): String
  }
`;

export default query;
