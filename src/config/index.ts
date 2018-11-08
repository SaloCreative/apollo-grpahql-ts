interface GlobalConfig {
  port: number;
  engine: string;
}

export const build_config = (ENV: string) : GlobalConfig => {
  switch (ENV) {
    case 'production':
      return {
        port: 80,
        engine: 'service:SaloCreative-9365:MAZ7g0GiRiv7F8P33m5oKA'
      };

    case 'staging':
      return {
        port: 80,
        engine: 'service:SaloCreative-9365:MAZ7g0GiRiv7F8P33m5oKA'
      };

    case 'development':
    default:
      return {
        port: 7000,
        engine: 'service:SaloCreative-9365:MAZ7g0GiRiv7F8P33m5oKA'
      };
  }
};
