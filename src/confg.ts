import dotenv from 'dotenv';

dotenv.config();

['PORT',
'API_SERVER',
].forEach( (item) => {
  if (!process.env[item]) {
    console.error(`env value ${item} is required.`);
    process.exit(1);
  }
});

const appConfig = {
  port: process.env.PORT,
  apiServer: process.env.API_SERVER,
};

export default appConfig;
