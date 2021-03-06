import server from './server';
import { build_config } from './config';

const ENV = process.env.NODE_ENV;
const config = build_config(ENV);
const { port } = config;

server.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${ port }`);
});

interface Mutation {}
interface Query {}
interface Resolver {}
class Auth extends ResolverClass {
  mutation() : Mutation {
    return {};
  }
  query() : Query {
    return {};
  }
  resolver() : Resolver {
    return {};
  }
}
