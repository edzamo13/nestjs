import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  return {
    apiKey: process.env.API_KEY,
    jwtSecret: process.env.JWT_SECRET,
    mongo: {
      dbName: process.env.MONGO_DB,
      user: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
      port: parseInt(process.env.MONGO_PORT, 10),
      host: process.env.MONGO_HOST,
      connection: process.env.MONGO_CONNECTION,
    },
  };
});
