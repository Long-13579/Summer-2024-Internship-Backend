import 'dotenv/config';
export const configPathEnv = {

  development: {
    username: process.env.DEVELOPMENT_USERNAME,
    password: process.env.DEVELOPMENT_PASSWORD,
    database: process.env.DEVELOPMENT_DATABASE,
    host: process.env.DEVELOPMENT_HOST,
    dialect: process.env.DEVELOPMENT_DIALECT,
    port: process.env.DEVELOPMENT_PORT,
    vnp: {
      vnp_TmnCode: process.env.VNP_TMNCODE,
      vnp_HashSecret: process.env.VNP_HASHSECRET,
      vnp_Url: process.env.VNP_URL,
      vnp_Api: process.env.VNP_API,
    },
    email: {
      service: process.env.MAIL_SERVICE,
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_MAIL_PASSWORD,
      }
    }
  },
  test: {
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD,
    database: process.env.TEST_DATABASE,
    host: process.env.TEST_HOST,
    dialect: process.env.TEST_DIALECT,
    port: process.env.TEST_PORT
  },
  production: {
    username: process.env.PRODUCTION_USERNAME,
    password: process.env.PRODUCTION_PASSWORD,
    database: process.env.PRODUCTION_DATABASE,
    host: process.env.PRODUCTION_HOST,
    dialect: process.env.PRODUCTION_DIALECT,
    port: process.env.PRODUCTION_PORT,
    vnp: {
      vnp_TmnCode: process.env.VNP_TMNCODE,
      vnp_HashSecret: process.env.VNP_HASHSECRET,
      vnp_Url: process.env.VNP_URL,
      vnp_Api: process.env.VNP_API,
    },
    email: {
      service: process.env.MAIL_SERVICE,
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_MAIL_PASSWORD,
      }
    }
  },
  
};

export const env = process.env.NODE_ENV || 'development';

