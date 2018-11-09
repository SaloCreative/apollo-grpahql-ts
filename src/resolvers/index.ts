import auth from './auth';

// Types we are including in resolver
const types = [auth];

const generate_resolvers = () => {
  let mutation = {};
  let query = {};
  let resolvers = {};

  types.forEach((resolver) => {
    mutation = { ...mutation, ...resolver.mutation() };
    query = { ...query, ...resolver.query() };
    resolvers = { ...resolvers, ...resolver.resolver() };
  });
  return {
    Mutation: mutation,
    Query: query,
    ...resolvers
  };
};

const resolvers = generate_resolvers();

export default resolvers;
