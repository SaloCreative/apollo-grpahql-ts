const ENV = process.env.NODE_ENV;
const IS_DEVELOPMENT = ENV === 'development';

const { get } = require('lodash');
import { ApolloServer } from 'apollo-server-express';

// HELPERS
import schema from '../schema';
import resolvers from '../resolvers';
import { build_config } from '../config';

// MODELS

// Global config options for the application
const config = build_config(ENV);

// Set up Apollo Server
const server = new ApolloServer({
  resolvers,
  typeDefs: schema,
  context: ({ req }) => {
    // simple auth check on every request
    const auth_header = get(req, 'headers.authorization', '');
    const token = auth_header.split(' ')[1];

    // Get an auth object for use later
    const auth = {};
    // Initialize data models and pass dependencies
    const models = {};

    return {
      models,
      auth
    };
  },
  engine: {
    apiKey: config.engine
  },
  tracing: true,
  introspection: IS_DEVELOPMENT,
  playground: IS_DEVELOPMENT
});

export default server;
