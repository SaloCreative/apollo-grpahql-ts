import { ResolverClass } from '../classes/resolver';

interface Mutation {
  login: Function;
}

interface Query {}

interface Resolver {}

class Auth extends ResolverClass {

  mutation() : Mutation {
    return {
      login: async (root, { email, password }, { models }) => {
        const user = await models.auth.login({ email, password });
        return user;
      }
    };
  }

  query() : Query {
    return {};
  }

  resolver() : Resolver {
    return {};
  }

}

export default new Auth();
