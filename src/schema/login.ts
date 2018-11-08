import { gql } from 'apollo-server';

const login = gql`
  type Login {
    id: Int
    profile_id: String
    first_name: String
    last_name: String
    language: String
    token: String
    roles: [Int]
  }
`;

export default login;
