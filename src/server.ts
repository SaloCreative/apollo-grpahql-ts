import app from './app';
import { build_config } from './config';

const ENV = process.env.NODE_ENV;
const config = build_config(ENV);
const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Express server listening on port ${ PORT }`);
});
