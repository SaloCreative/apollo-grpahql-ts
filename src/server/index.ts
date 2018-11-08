import express from 'express';
import * as bodyParser from 'body-parser';
import apollo from './apollo';

class Server {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.disable('x-powered-by');
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // Apply server middleware for GraphQL
    apollo.applyMiddleware({ app: this.app });
  }

}

export default new Server().app;
