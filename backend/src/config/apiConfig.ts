const config = {
  masterKey: process.env.MASTER_KEY,
  port: process.env.NODE_ENV === 'production' ? 8080 : 3333
};

export = config;
