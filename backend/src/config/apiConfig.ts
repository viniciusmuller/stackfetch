const config = {
  masterKey: process.env.MASTER_KEY,
  // If we are in production, use port 80
  port: process.env.NODE_ENV === 'production' ? 8080 : process.env.PORT
};

export = config;
