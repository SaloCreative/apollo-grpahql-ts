interface GlobalConfig {
  port: number;
  engine: string;
}

export const build_config = (ENV: string) : GlobalConfig => {
  switch (ENV) {
    case 'production':
      return {
        port: 80,
        engine: 'service:LUSHDigital-174:RMM0imDozoG1sSS68DAj9g'
      };

    case 'staging':
      return {
        port: 80,
        engine: 'service:LUSHDigital-Staging:DsaZyQEg5SlP3uHvZ2klkQ'
      };

    case 'development':
    default:
      return {
        port: 7000,
        engine: 'service:LUSHDigital-Development:yXK3ZU6hXAkjGk0ve-MlKg'
      };
  }
};
